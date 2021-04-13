import express from "express";
import User from "../model/regular-users";
import bcrypt from "bcrypt";

const router = express.Router();

// Register new users to db
router.post("/regular", (req, res) => {
  // Dictionary sent to express from react of registered users
  let token = req.body.user;
  const saltRounds = 10;

  bcrypt.hash(token.pName, saltRounds, (hash) => {
    new User({
      firstName: token.fName,
      lastName: token.lName,
      username: token.uName,
      password: hash,
    })
      .save()
      .then((newUser) => {
        console.log("New user created: " + newUser);
      })
      .catch((err) => console.log(err));
  });
});

export default router;
