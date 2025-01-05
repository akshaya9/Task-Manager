import express from "express";

const router = express.Router();

// test
router.get("/test", (req, res) => {
  res.send("hello, from test.");
});

export default router;
