var express = require("express");
var router = express.Router();
let UserModel = require("../models/user");
let util = require("../modules/util");
let statusCode = require("../modules/statusCode");
let resMessage = require("../modules/responseMessage");

router.post("/signup", async (req, res) => {
  //1. request body에서 값을 읽어온다.
  const {
    id,
    name,
    password,
    email
  } = req.body;

  // 예외처리
  // 1.parameter
  if (!id || !name || !password || !email) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    return;
  }

  // 2.아이디 중복 체크
  if (UserModel.checkUser(id)) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
    return;
  }

  const salt = "dfw23EFVR3fefnd68FW3r4343";

  const idx = await UserModel.signup(id, name, password, salt, email);
  if (idx === -1) {
    return res
      .status(statusCode.DB_ERROR)
      .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
  }

  res
    .status(statusCode.OK)
    .send(
      util.success(statusCode.OK, resMessage.CREATED_USER, {
        userId: idx
      })
    );
});

router.post("/signin", async (req, res) => {
  //request body에서 데이터 가져오기
  const {
    id
  } = req.body;

  // request dat 확인 - 없다면 Null Value 반환
  if (!id) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    return;
  }

  //존재하는 회원인지 확인
  if (UserModel.signin(id)) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
    return;
  }

  // 성공 - login success와 함께 user id 반환
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {
      ID: id,
    })
  );
});

router.get("/:id", async (req, res) => {
  //request body에서 데이터 가져오기
  const id = req.params.id

  // request dat 확인 - 없다면 Null Value 반환
  if (!id) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    return;
  }

  const result = await UserModel.getUserById(id);

  //존재하는 회원인지 확인
  if (result) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
    return;
  }

  // 성공 - login success와 함께 user id 반환
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, {
      id: result[0].userIdx,
      name: result[0].name,
      email: result[0].email
    })
  );
});

module.exports = router;