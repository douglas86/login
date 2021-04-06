import express from "express";
import keys from "../config/keys";

const router = express.Router();

router.get("/v1/auth/google", async (req, res) => {
  res.send(req.body);
});

export default router;
