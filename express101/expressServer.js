const express = require("express");
const app = express();

//All is  a method, it takes 2 args:
//  1. Route
//  2. Callbacl to runif the route is requested

app.all("*", (req, res) => {
  //express handles the basic headers(status code, myme-type)
});
