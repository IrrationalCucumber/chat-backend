const express = require("express");
var app = express();
const users = require("./sample data/user");

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
  res.send(require("./sample data/chat"));
});

app.post("/send", (req, res) => {
  const sender = req.query.sender;
  const receiver = req.query.receiver;
  const message = req.query.message;
  const q =
    "INSERT INTO ( sender, receiver, message, timestamp) VALUES (? NOW())";
  const values = [sender, receiver, message];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred" });
    }
    return res.json(data);
  });
});
