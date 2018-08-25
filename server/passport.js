const passport = require('passport');
const JwtStrat = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrat = require('passport-local').Strategy;
const { JWT_SECRET } = require('./configuration');
const User = require('./models/user');

//json web token strat
passport.use(new JwtStrat({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        //user indicated by token
        const user = await User.findById(payload.sub);

        //handle non existing user
        if (!user) {
            return done(null, false);
        }

        //return user
        done(null, user);
    } catch (error) {
        done(error, false)
    }
    
}));

//local strategy

passport.use(new LocalStrat({
  usernameField: 'email'  
}, async ( email, password, done) => {
    try {

            //find user by email
    const user = await User.findOne({email: email});

    if (!user) {
        return done(null, false);
    }

    


    //check password
    const matchPassword = await user.validPassword(password);

    if (!matchPassword) {
        return done(null, false);
    }

    done(null, user);

    } catch (error) {
        done(error, false);
    }

    // //find user by email
    // const user = await User.findOne({email: email});

    // if (!user) {
    //     return done(null, false);
    // }

    


    // //check password
    // const matchPassword = await user.validPassword(password);

    // if (!matchPassword) {
    //     return done(null, false);
    // }

    // done(null, user);


}))