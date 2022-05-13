var express = require("express");
const { search } = require("./movie");
var router = express.Router();
const movies = require("../data/movies");
const people = require("../data/people");

function queryRequired(req, res, next) {
  const searchTerm = req.query.query;
  if (!searchTerm) {
    res.json({
      msg: "Query is required."
    });
  } else {
    next();
  }
}

// Checks every route for a query input
router.use(queryRequired);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("Search page goes here");
});

// =============== GET  /search/movie =====================//
router.get("/movie", (req, res, next) => {
  const searchTerm = req.query.query;
  const result = movies.filter((movie) => {
    let found =
      movie.overview.includes(searchTerm) || movie.title.includes(searchTerm);

    return found;
  });
  res.json({ result });
});

// =============== GET /search/person ====================//
router.get("/person", (req, res) => {
  const searchTerm = req.query.query;
  const result = people.filter((person) => {
    let found = person.name.includes(searchTerm);

    return found;
  });
  res.json({ result });
});

module.exports = router;
