import express from "express";
import User from "../model/regular-users";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/login/:username/:password", (req, res) => {
  let token = req.params;
  User.findOne({
    username: token.username,
  }).then((currentUser) => {
    if (currentUser) {
      bcrypt.compare(token.password, currentUser.password, (err, result) => {
        if (result) {
          res.send(result);
        } else {
          res.send(result);
        }
      });
    } else {
      console.log("Please register as a user");
    }
  });
});

export default router;
