import express from "express";
import User from "../model/google-users";

const router = express.Router();

router.post("/google", (req, res) => {
  let token = req.body.googleInfo.profileObj;
  console.log(token.googleId);
  new User({
    googleId: token.googleId,
    imageUrl: token.imageUrl,
    email: token.email,
    name: token.name,
    givenName: token.givenName,
    familyName: token.familyName,
  }).save();
});

export default router;
