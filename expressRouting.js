const express = require("express");
const app = express();

app.get("/", (req, res) => {});

app.listen(3000);
console.log(`The server is listening on port 3000`);
