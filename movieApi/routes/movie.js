var express = require("express");
var router = express.Router();

//big movie array

/* GET movie page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
