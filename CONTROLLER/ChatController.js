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
  //get convo messages
  fetchMessageByID: async (req, res) => {
    const id = req.params.id;
    try {
      const message = await Chat.getMessagesByID(id);
      if (!message) {
        return res.status(404).json({ message: "Not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  //FUNCTION for INSERTING NEW MESSAGE
  addNewMessage: async (req, res) => {
    try {
      const text = req.query.text;
      const convoID = req.query.convoID;
      const senderID = req.query.senderID;
      const message = await Chat.addMessage(text, convoID, senderID);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  //FUNCTION for UPDATING CONVO as FAVORITE
  setConvoToFavorite: async (req, res) => {
    try {
      const id = req.params.id;
      const message = await Chat.updateAsFavorite(id);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = ChatController;
