var express = require("express");
var router = express.Router();
const request = require("request");
const { response } = require("../app");

<<<<<<< HEAD
// const apiKey = "1fb720b97cc13e580c2c35e1138f90f8"; //My personal

const apiKey = "123456789";
// const apiBaseUrl = "http://api.themoviedb.org/3";
const apiBaseUrl = "http://localhost:3030";
const nowPlayingUrl = `${apiBaseUrl}/movie/most_popular?api_key=${apiKey}`;
=======
const apiKey = "1fb720b97cc13e580c2c35e1138f90f8";
// const apiKey = '123456789';
const apiBaseUrl = "http://api.themoviedb.org/3";
// const apiBaseUrl = 'http://localhost:3030';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
>>>>>>> parent of 08d9ee7 (Video 42)
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);

    res.render("index", {
      parsedData: parsedData.results,
    });
  });
});

router.get("/movie/:id", (req, res) => {
  const { id } = req.params;
  const thisMovieUrl = `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;

  request.get(thisMovieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.render("single-movie", {
      parsedData,
    });
  });
});

router.post("/search", (req, res) => {
  const userSearchTerm = encodeURI(req.body.movieSearch);
  const category = req.body.cat;
  const movieUrl = `${apiBaseUrl}/search/${category}?query=${userSearchTerm}&api_key=${apiKey}`;

  request.get(movieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.json(parsedData);
  });
});
module.exports = router;
