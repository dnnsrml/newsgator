const express = require("express");
const router = express.Router();
const { getMessage, getWelcome } = require("../controllers/sampleController");

// GET API message
router.get("/message", getMessage);
router.get("/welcome", getWelcome);

module.exports = router;
