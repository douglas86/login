import express from "express";
import User from "../model/regular-users";

const router = express.Router();

router.post("/regular", (req, res) => {
  let token = req.body.user;
  new User({
    firstName: token.fName,
    lastName: token.lName,
    username: token.uName,
    password: token.pName,
  })
    .save()
    .then((newUser) => {
      console.log("new user created: " + newUser);
    });
});

export default router;
