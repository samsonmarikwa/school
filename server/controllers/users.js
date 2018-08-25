const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET} = require('../configuration');

signToken = (user) => {
    return JWT.sign({
        iss: "Virtual-School",
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);

}

module.exports = {

    //signup

    signUp: async (req, res, next) => {
        
        //email and password
     console.log('UsersController.signUp() called');
     
     const email = req.value.body.email;
     const password = req.value.body.password;


     //check for user duplicate email
     const foundUser = await User.findOne({email: email});
     if (foundUser) {
        return res.status(403).json({error: "Email already in use"})
     }
     //create new user
     const newUser = new User({
        email: email,
        password: password,
    });
      await newUser.save();

    //   res.json({ user: 'created'});
    //token

    const token = signToken(newUser);

      res.status(200).json({token:token});
    },

    //sign in

    signIn: async (req, res, next) => {

        //generate token
        // console.log('req.user', req.user)
        const token = signToken(req.user);
        res.status(200).json({ token })
        // console.log('logged in')   
       },

       //for page you see after login
    secret: async (req, res, next) => {
        console.log('yoooooooo');
        res.json({secret: 'secrets'});  
       }

}