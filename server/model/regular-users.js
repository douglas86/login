import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName: String,
    LastName: String,
    Username: String,
    Password: String,
});

const User = mongoose.model('regular-user', userSchema);

export default User;
