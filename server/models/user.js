const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Schema Creation
const userSchema = new Schema({
    email:{ type:String,
            reqwuired: true,
            unique: true,
            lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String
});

userSchema.pre('save', async function (next) {
    //generate salt
    try {
    const salt =  await bcrypt.genSalt(10);

    // create hashed password--salt + hash
    const passwordHash = await bcrypt.hash(this.password, salt);

    this.password = passwordHash;
    next();
    // console.log('salt', salt);
    // console.log('unhashed', this.password);
    // console.log('hashed', passwordHash);
    } catch(error) {
        next(error);
    }
});

userSchema.methods.validPassword = async function(newPassword) {
    try {
        //compare plain text vs hashed password
        return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
}

//Model Creation
const User = mongoose.model('user', userSchema)

//Export the model

module.exports = User;