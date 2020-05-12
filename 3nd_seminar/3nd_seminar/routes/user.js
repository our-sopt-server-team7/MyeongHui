var express = require("express");
var router = express.Router();
let UserModel = require("../models/user");
let util = require("../modules/util");
let statusCode = require("../modules/statusCode");
let resMessage = require("../modules/responseMessage");

router.post("/signup", async (req, res) => {
  //1. request body에서 값을 읽어온다.
  const { id, name, password, email } = req.body;

  // 예외처리
  // 1.parameter
  if (!id || !name || !password || !email) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    return;
  }

  // 2.아이디 중복 체크
  if (UserModel.filter((it) => it.id == id).length > 0) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
    return;
  }

  UserModel.push({ id, name, password, email });
  res.status(200).send(
    util.success(statusCode.OK, resMessage.CREATED_USER, {
      userId: id,
    })
  );
});

router.post("/signin", async (req, res) => {
  //request body에서 데이터 가져오기
  const { id, password } = req.body;

  // request dat 확인 - 없다면 Null Value 반환
  if (!id || !password) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    return;
  }

  //존재하는 아이디인지 확인 - 없다면 No user 반환
  const user = UserModel.filter((user) => user.id == id);
  if (user.length == 0) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
    return;
  }

  // 비밀번호 확인 - 없다면 Miss match password 반환
  if (user[0].password != password) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW));
    return;
  }

  // 성공 - login success와 함께 user id 반환
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {
      userId: id,
    })
  );
});

module.exports = router;
