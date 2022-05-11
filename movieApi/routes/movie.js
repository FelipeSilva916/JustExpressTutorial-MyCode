var express = require("express");
var router = express.Router();
const movieDetails = require("../data/movieDetails");

//all routes here have /movie in front
router.get("/", function (req, res, next) {
  res.json("MOVIE page goes here");
});

//GET /movie/movieID
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

//GET movie/top_rated

//POST /movie/movieId/rating

//DELETE //movie/movieId/rating
module.exports = router;
