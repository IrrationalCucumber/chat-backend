const Chat = require("../Model/Chat");

const ChatController = {
  //get all chat
  fetchChat: async (_, res) => {
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
  //get chat of user
  fetchChatByID: async (req, res) => {
    const id = req.params.id;
    try {
      const chat = await Chat.getChatbyID(id);
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
