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
