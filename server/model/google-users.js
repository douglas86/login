import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  imageUrl: String,
  email: String,
  name: String,
  givenName: String,
  familyName: String,
});

const User = mongoose.model("google-user", userSchema);

export default User;
