const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/admin", protect, authorize(["Admin"]), (req, res) => {
  res.send("Welcome Admin!");
});

router.get("/moderator", protect, authorize(["Moderator", "Admin"]), (req, res) => {
  res.send("Welcome Moderator!");
});

router.get("/user", protect, authorize(["User", "Moderator", "Admin"]), (req, res) => {
  res.send("Welcome User!");
});

module.exports = router;

