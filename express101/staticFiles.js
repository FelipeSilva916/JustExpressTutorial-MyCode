const express = require("express");
const app = express();
app.use(express.static("public"));

//app has an USE method -> Middleware

//
//
//
//
//
//

app.listen(3000);
console.log(`The server is listening on port 3000`);
