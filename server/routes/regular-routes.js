import express from "express";
import User from "../model/regular-users";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/regular", (req, res) => {
  let token = req.body.user;
  const saltRounds = 10;

  bcrypt.hash(token.pName, saltRounds, (err, hash) => {
    new User({
      firstName: token.fName,
      lastName: token.lName,
      username: token.uName,
      password: hash,
    })
      .save()
      .then((newUser) => {
        console.log("New user created: " + newUser);
      });
  });
});

export default router;
