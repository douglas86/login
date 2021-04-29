import express from "express";
import User from "../model/google-users";
import fs from "fs";

const router = express.Router();

router.post("/", (req, res) => {
  let token = req.body.profileObj;
  let user = { username: token.googleId };
  let data = JSON.stringify(user);
  // find data from db using google id
  User.findOne({
    googleId: token.googleId,
  }).then((currentUser) => {
    // if user is in db
    if (currentUser) {
      console.log("user is: ", currentUser);
      res.send(currentUser);
      // if user not in db
    } else {
      new User({
        googleId: token.googleId,
        imageUrl: token.imageUrl,
        email: token.email,
        name: token.name,
        givenName: token.givenName,
        familyName: token.familyName,
      })
        .save()
        // once saved to db
        .then((newUser) => {
          console.log("new user created: " + newUser);
          res.send(newUser);
        });
    }
    fs.writeFileSync("user.json", data);
  });
});

export default router;
