const express = require('express');

const {getAllPosts, createPost} = require('../controllers/post.controller')

const postsRouter = express.Router();

const { Post } = require('../models/post.model');

postsRouter.get('/', getAllPosts);

postsRouter.post('/', createPost);

module.exports = {postsRouter};
