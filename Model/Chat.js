const { createClient } = require("@supabase/supabase-js");
// Initialize Supabase client

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// console.log("Supabase URL:", process.env.SUPABASE_URL);
// console.log("Supabase Key:", process.env.SUPABASE_KEY);

const Chat = {
  getChat: async () => {
    try {
      const { data, error } = await supabase.from("CHAT_CONVO").select("*");
      //.eq("sender_id", id);

      if (error) throw error;

      return data;
    } catch (error) {
      console.error("Error fetching chat:", error);
      return null;
    }
  },
};
module.exports = Chat;
