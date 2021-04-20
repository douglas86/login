import express from "express";
import User from "../model/regular-users";
import bcrypt from "bcrypt";
import fs from "fs";

const router = express.Router();

let current = "";

router.get("/", (req, res) => {
  console.log(current);
  let rawdata = fs.readFileSync("user.json");
  let user = JSON.parse(rawdata);
  res.send(user);
});

router.get("/login/:username/:password", (req, res) => {
  let token = req.params;
  User.findOne({
    username: token.username,
  }).then((currentUser) => {
    if (currentUser) {
      bcrypt.compare(token.password, currentUser.password, (err, result) => {
        if (result) {
          current = token.username;
          let user = {
            username: token.username,
          };
          let data = JSON.stringify(user);
          fs.writeFileSync("user.json", data);
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
