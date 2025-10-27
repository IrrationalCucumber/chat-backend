const express = require("express");
const ChatController = require("../CONTROLLER/ChatController.js");

const router = express.Router();

router.get("/convos", ChatController.fetchChat); // to retrieve chats
router.get("/chat/:id", ChatController.fetchChatByID); // to retrieve chat of user
router.get("/messages/:id", ChatController.fetchMessageByID); //messages
router.get("/send", ChatController.addNewMessage); //ROUTE for INSERTING NEW MESSAFW
//ROUTE for UPDATE CONVO to FAVORITE
module.exports = router;
