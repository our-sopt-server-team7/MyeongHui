var express = require("express");
var router = express.Router();

// api/blog/post
router.get("/post", function (req, res, next) {
    res.render('index', {
        title: '블로그 대박나라아아아'
    });
});

module.exports = router;