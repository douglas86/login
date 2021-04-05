import mongoose from 'mongoose';

const Schema = mongooose.Scheam;

const userSchema = new Schema({
    username: String,
    googleId: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
