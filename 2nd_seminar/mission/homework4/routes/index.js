var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: '명희야야아ㅏㅇ아'
  });
});

router.use("/api", require("./api"));

module.exports = router;