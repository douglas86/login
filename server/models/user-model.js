import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    thumbnail: String,
});

const User = mongoose.model('google-user', userSchema);

export default User;
