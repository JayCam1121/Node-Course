const express = require('express');

// Controllers
const { getAllUsers, createUser, deleteUser, updateUser } = require('../controllers/user.controller');

const {validateRegister} = require('../middlewares/users.middlewares')

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);  

usersRouter.post('/', createUser);

usersRouter.patch('/:id', updateUser);

usersRouter.delete('/:id', deleteUser);

module.exports = {usersRouter};