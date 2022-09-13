const express = require('express');

// Controllers
const { getAllUsers, createUser, deleteUser, updateUser } = require('../controllers/user.controller');

const {validateSession, validateUserData, validateUserRole} = require('../middlewares/example.middleware')

const usersRouter = express.Router();

usersRouter.get('/', validateSession, validateUserRole, validateUserData ,getAllUsers);  

usersRouter.post('/', createUser);

usersRouter.patch('/:id', updateUser);

usersRouter.delete('/:id', deleteUser);

module.exports = {usersRouter};