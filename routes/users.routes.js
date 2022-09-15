const express = require('express');
const {body} = require('express-validator')

// Controllers
const { getAllUsers, createUser, deleteUser, updateUser } = require('../controllers/user.controller');

const {validateRegister} = require('../middlewares/users.middlewares')

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);  

usersRouter.post(
    '/', 
    body('name').isString().notEmpty().isLength({min: 3 }), 
    body('email').isEmail(), 
    body('password').isString().isEmpty().isLength({min: 8}), 
    createUser
);

usersRouter.patch('/:id', validateRegister, updateUser);

usersRouter.delete('/:id', validateRegister, deleteUser);

module.exports = {usersRouter};