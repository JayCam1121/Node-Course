const express = require('express');

const { postsRouter } = require('./routes/posts.routes');
const {usersRouter} = require('./routes/users.routes');

const app = express();

app.use(express.json()); // Middleware. Always before the endpoints

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

//Catch non-existing error
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exist in our server`
    });
})

module.exports = {app};

