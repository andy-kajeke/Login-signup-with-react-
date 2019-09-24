const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());
app.listen(7000, ()=> console.log('Server is runnig on port: 7000'));

const Users = require('./routes/Users');

app.use('/users', Users)
