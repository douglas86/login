import express from "express";
import User from "../model/regular-users";
import bcrypt from "bcrypt";

const router = express.Router();

let current = [];

router.post("/login", (req, res) => {
  let token = req.body.user;
  console.log(token);
  User.findOne({
    username: token.uName,
  })
    .then((currentUser) => {
      if (currentUser) {
        bcrypt.compare(token.pName, currentUser.password, (err, result) => {
          if (result) {
            current.push(currentUser);
          } else {
            console.log(false);
          }
        });
      } else {
        console.log("Please register as a user");
      }
    })
    .catch((err) => console.log(err));
});

router.get("/login", (req, res) => {
  res.send(current);
});

export default router;
