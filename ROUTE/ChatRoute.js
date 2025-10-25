const express = require("express");
const chatcontoller = require("../CONTROLLER/ChatController.js");

const router = express.Router();

router.get("/convos", chatcontoller.fetchChat); // to retrieve chats
router.get("/chat/:id", chatcontoller.fetchChatByID); // to retrieve chat of user
router.get("/messages/:id", chatcontoller.fetchMessageByID); //messages
module.exports = router;
