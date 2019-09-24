import axios from 'axios';

export const register = newUser => {
    return axios
    .post('users/register', {
        first_Name: newUser.first_Name,
        last_Name: newUser.last_Name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log("Registered");
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('userToken', res.data);
        return res.data;
    })
    .catch(err => {
        console.log(err)
    })
}