const express = require('express');
const router = express.Router();

// default path for use() is "/"
router.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

module.exports = router;