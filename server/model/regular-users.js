import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
});

const User = mongoose.model('regular-user', userSchema);

export default User;
