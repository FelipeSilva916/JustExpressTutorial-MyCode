const express = require("express");
const app = express();
const path = require("path");

//All is  a method, it takes 2 args:
//  1. Route
//  2. Callback to run the route is requested

// app.all("*", (req, res) => {
//   //express handles the basic headers(status code, mime-type)
//   res.send(`<h1>This is the home page 🏠 </h1>`);
// });

app.all("/", (req, res) => {
  console.log(path.join(__dirname + "/node.html"));
  res.sendFile(path.join(__dirname + "/node.html"));
});

app.all("*", (req, res) => {
  res.send(`<h1>SOrry, this page doesn't exist</h1>`);
});
app.listen(3000);
console.log(`The server is listening on port 3000`);
