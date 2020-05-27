var express = require("express");
var router = express.Router();

// api/users/login
router.get("/login", function (req, res, next) {
    res.render('index', {
        title: '로그인을 성공했습니다아아아'
    });
});

// api/users/signup
router.get("/signup", function (req, res, next) {
    res.render('index', {
        title: '회원가입을 환영합니아다아아아'
    });
});

module.exports = router;