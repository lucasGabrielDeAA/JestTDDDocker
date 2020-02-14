const routes = require('express').Router();
const { User } = require('./app/models');

User.create({ name: 'Lucas Gabriel', email: 'lg.technus@gmail.com', password_hash: '123456789' });

// Routes

module.exports = routes;