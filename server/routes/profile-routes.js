import express from "express";
import User from "../model/regular-users";

const router = express.Router();

router.post("/login", (req, res) => {
  let token = req.body.user;
  console.log(token);
  User.findOne({
    username: token.uName,
  })
    .then((currentUser) => {
      if (currentUser) {
        console.log("user is: ", currentUser);
      } else {
        console.log("Please register as a user");
      }
    })
    .catch((err) => console.log(err));
});

export default router;
