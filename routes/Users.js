const express = require('express');
const cors = require('cors');
const usersRoute = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserModel = require('../models/Users');
usersRoute.use(cors());

process.env.SECURITY_KEY = 'secret';

usersRoute.post('/register', (req, res)=> {
    const today = new Date();
    const userData = {
        first_Name: req.body.first_Name,
        last_Name: req.body.last_Name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    UserModel.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash;
                UserModel.create(userData)
                .then(user => {
                    res.json({status: user.email + ' registered'});
                })
                .catch(err =>{
                    res.send('error: '+ err);
                })
            })
        }else{
            res.json({message: 'Email already exists'});
        }
    })
    .catch(err => {
        res.send('error: '+ err);
    })
});

usersRoute.post('/login', (req, res) =>{
    UserModel.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECURITY_KEY, {
                    expiresIn: 1440
                });
                res.send(token);
            }else{
                res.json({error: 'User doest not exist'});
            }
        }
    })
    .catch(err => {
        res.json({error: err});
    })
})

module.exports = usersRoute;
