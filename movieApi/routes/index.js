var express = require("express");
var router = express.Router();
const movies = require("../data/movies");

/* GET movie page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/most_popular", (req, res) => {
  let page = req.query.page;
  if (page === undefined) {
    page = 0;
  }
  if (req.query.api_key !== 123456789) {
    res.json("Invalid API Key");
  } else {
    const results = movies.filter((movie) => {
      return movie.most_popular;
    });
    const indexToStart = (page - 1) * 20;
    results = results.slice(indexToStart, indexToStart + 19);
    res.json({ results });
  }
});

module.exports = router;
