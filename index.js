const express = require("express");
var app = express();
app.get("/", (_, res) => {
  res.send("Hello World!");
});
app.listen(10000, function () {
  console.log("Started application on port %d", 8800);
});
