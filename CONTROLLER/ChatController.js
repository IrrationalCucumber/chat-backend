const Chat = require("../Model/Chat");

const ChatController = {
  //get chat of user
  fetchChat: async (_, res) => {
    //const id = req.params.id;
    //const userID = req.params.userid; // Assuming userID is stored on request object
    try {
      const chat = await Chat.getChat();
      if (!chat) {
        return res.status(404).json({ message: "Chat not found" });
      }
      res.json(chat);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = ChatController;
