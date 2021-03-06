const path = require("path");
const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res, next) => {
  res.render("index", {
    msg: "success",
  });
});

app.listen(3000);
