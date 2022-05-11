var express = require("express");
var router = express.Router();

//import movie array from movies
const movies = require("../data/movies");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/most_popular", (req, res) => {
  let page = req.query.page;
  if (page === undefined) {
    page = 1;
  }
  if (req.query.api_key != 123456789) {
    res.json("Invalid API Key");
  } else {
    let results = movies.filter((movie) => {
      return movie.most_popular;
    });
    //start us out on the page desired
    const pageIndexStart = (page - 1) * 20;

    results = results.slice(pageIndexStart, pageIndexStart + 19);
    res.json({ page, results });
  }
});

module.exports = router;
