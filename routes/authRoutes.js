const AuthenticationController = require('../controllers/authentication'),  
      express = require('express'),
      passportService = require('../config/passport'),
      passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false }); 

module.exports = app => {
  app.post('/auth/register', AuthenticationController.register);

  app.post('/auth/login', requireLogin, AuthenticationController.login);
}