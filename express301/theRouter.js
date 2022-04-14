const express = require("express");
const app = express();
let router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    msg: "Router Works ✅",
  });
});

module.exports = router;
