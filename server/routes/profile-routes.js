import express from "express";
import User from "../model/regular-users";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", (req, res) => {
  let token = req.body.user;
  console.log(token);
  User.findOne({
    username: token.uName,
  })
    .then((currentUser) => {
      if (currentUser) {
        console.log("user is: ", currentUser.password);
        bcrypt.compare(token.pName, currentUser.password, (err, result) => {
          if (result) {
            console.log(true);
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

export default router;
