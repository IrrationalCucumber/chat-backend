const express = require("express");
var app = express();
require("dotenv").config();
const users = require("./sample data/user");
const chats = require("./sample data/chat.json");

app.get("/", (_, res) => {
  res.send("Hello World!");
});
app.listen(8800, function () {
  console.log("Started application on port %d", 8800);
});

// endpoint to get sample users data
app.get("/users", (_, res) => {
  res.send(users);
});

app.get("/chats", (_, res) => {
  res.send(require("./sample data/chat.json"));
});

// app.post("/send", (_, res) => {
//   const sender = 1;
//   const receiver = 2;
//   const message = "Hello, how are you?";
//   const q =
//     "INSERT INTO ( sender, receiver, message, timestamp) VALUES (? NOW())";
//   const values = [sender, receiver, message];

//   db.query(q, values, (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "An error occurred" });
//     }
//     return res.json(data);
//   });
// });
// Simulating a database with an in-memory array

app.post("/send", (_, res) => {
  const sender = 1;
  const receiver = 2;
  const message = "sapmle message";
  const newChat = {
    id: 4,
    sender,
    receiver,
    message,
    timestamp: new Date().toISOString(),
  };
  chats.push(newChat);
  res.json(newChat);
});

//supabase db
const ChatRoute = require("./ROUTE/ChatRoute.js");

app.use("/route/", ChatRoute);
