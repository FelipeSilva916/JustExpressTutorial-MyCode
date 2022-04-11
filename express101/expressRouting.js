const express = require("express");
const app = express();

console.log(`The server is listening on port 3000`);

// app.all("/", (req, res) => {});

app.get("/", (req, res) => {
  //   console.log(req);
  res.send(`<h1>Welcome To The 🏡 GET Page`);
});

const router = express.Router();

// router.get("/:name", (req, res) => {
//   console.log("working");
//   res.send("works");
// });

// app.use("/colors", router);

app.put("/", (req, res) => {});
app.post("/", (req, res) => {
  res.send(`<h1>Welcome To The 🏡 POST Page`);
});
app.delete("/", (req, res) => {});

app.listen(3000);
console.log(`The server is listening on port 3000`);
