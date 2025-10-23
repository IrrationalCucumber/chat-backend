const express = require("express");
const chatcontoller = require("../CONTROLLER/ChatController.js");

const router = express.Router();

router.get("/chat", chatcontoller.fetchChat); // to retrieve chat of user

module.exports = router;
