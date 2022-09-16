const express = require('express');
const {body, validationResult} = require('express-validator')

// Controllers
const { getAllUsers, createUser, deleteUser, updateUser } = require('../controllers/user.controller');
const {createUserValidators} = require('../middlewares/validatiors.middlewares')
const {validateRegister} = require('../middlewares/users.middlewares')

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);  

usersRouter.post(
    '/', 
    createUserValidators,
    createUser
);

usersRouter.patch('/:id', validateRegister, updateUser);

usersRouter.delete('/:id', validateRegister, deleteUser);

module.exports = {usersRouter};