const { createClient } = require("@supabase/supabase-js");
// Initialize Supabase client

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// console.log("Supabase URL:", process.env.SUPABASE_URL);
// console.log("Supabase Key:", process.env.SUPABASE_KEY);

const Chat = {
  //get all convo
  getChat: async () => {
    try {
      const { data, error } = await supabase.from("CHAT_CONVO").select("*");

      if (error) throw error;

      return data;
    } catch (error) {
      console.error("Error fetching chat:", error);
      return null;
    }
  },
  //get convo by id
  getChatbyID: async (id) => {
    try {
      const { data, error } = await supabase
        .from("CHAT_CONVO")
        .select(
          `*,receiver_id:CHAT_USER!CHAT_CONVO_receiver_id_fkey(user_name),
          sender_id:CHAT_USER!CHAT_CONVO_sender_id_fkey(user_name)`
        )
        .eq("sender_id", id);

      if (error) throw error;

      return data;
    } catch (error) {
      console.error("Error fetching chat:", error);
      return null;
    }
  },
  //get chat by convo id
  getMessagesByID: async (id) => {
    try {
      const { data, error } = await supabase
        .from("CHAT_MESSAGE")
        .select(`*`)
        .eq("convo_id", id);

      if (error) throw error;

      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },
  //inital func for insertin new message
  /**
   * DATA to INSERT
   * msg_sender_id
   * msg_content
   * convo_id
   */
  //
  addMessage: async (text, convoID, senderID) => {
    try {
      const { error } = await supabase.from("CHAT_MESSAGE").insert({
        msg_content: text,
        convo_id: convoID,
        msg_sender_id: senderID,
      });
      if (error) throw error;
    } catch (error) {
      console.error("Error adding:", error);
    }
  },
};
module.exports = Chat;
