const express = require("express");
const router = require('express-promise-router')();
const passport = require('passport');
const passportConfig = require('../passport');

const { validateBody, schemas} = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

//route for signup
router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp);

    //route for signin
router.route('/signin')
    .post( validateBody(schemas.authSchema), passport.authenticate('local', { session: false}), UsersController.signIn);
 
    //route for secret page after login
router.route('/secret')
    .get(passport.authenticate('jwt' , { session: false }), UsersController.secret);

    module.exports = router;