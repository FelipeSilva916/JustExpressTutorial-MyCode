const express = require("express");
const app = express();

//All is  a method, it takes 2 args:
//  1. Route
//  2. Callbacl to runif the route is requested

app.all("*", (req, res) => {
  //express handles the basic headers(status code, mime-type)
  res.send(`<h1>This is the home page 🏠 </h1>`);
});

app.listen(3000);
console.log(`The server is listening on port 3000`);
