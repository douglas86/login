import express from "express";
import User from "../model/regular-users";

const router = express.Router();

router.post("/regular", (req, res) => {
  let token = req.body;
  console.log(token);
});

export default router
