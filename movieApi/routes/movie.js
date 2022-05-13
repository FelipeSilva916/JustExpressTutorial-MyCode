var express = require("express");
var router = express.Router();
const movieDetails = require("../data/movieDetails");

function requireJSON(req, res, next) {
  if (!req.is("application/json")) {
    res.json({ msg: "Content type must be application/json" });
  } else {
    next();
  }
}

//all routes here have /movie in front
router.get("/", function (req, res, next) {
  res.json("MOVIE page goes here");
});
// =========================//

// ========  GET movie/top_rated ==============//
router.get("/top_rated", (req, res) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  const results = movieDetails.sort((movie1, movie2) => {
    return movie2.vote_average - movie1.vote_average;
  });
  let startingIndex = (page - 1) * 20;
  res.json(results.slice(startingIndex, startingIndex + 20));
});
//========================//

//============= GET /movie/movieID ================//
router.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const result = movieDetails.find((movie) => {
    //every time you pull stuff out of the URL its a string, even if its a number
    return movie.id === Number(movieId);
  });
  if (!result) {
    res.json({
      msg: "Movie ID not found.",
      production_companies: []
    });
  } else {
    res.json(result);
  }
});

//=============  POST /movie/movieId/rating ==============
router.post("/:movieId/rating", requireJSON, (req, res, next) => {
  const { movieId } = req.params;
  const userRating = req.body.value;
  if (userRating < 0.5 || userRating > 10) {
    res.json({
      msg: "Rating must be between 1 and 10"
    });
  } else {
    res.json({
      msg: "Thank you for submitting your rating",
      status_code: 200
    });
  }
});

//DELETE //movie/movieId/rating
router.delete("/:movieId/rating", requireJSON, (req, res, next) => {
  res.json({ msg: "Rating deleted!" });
});

module.exports = router;
