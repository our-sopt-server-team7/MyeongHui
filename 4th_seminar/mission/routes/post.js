var express = require("express");
var router = express.Router();
let Post = require("../models/post");
let util = require("../modules/util");
let statusCode = require("../modules/statusCode");
let resMessage = require("../modules/responseMessage");

// 모든 게시글 조회
router.get("/", async (req, res) => {
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.READ_ALL_SUCCESS, await Post.readAllPost()));
});

// 게시글 고유 id 값을 조회
router.get("/:id", async (req, res) => {
    const id = req.params.id;

    // 게시글 확인
    const post = await Post.readPost(id);
    if (post.length == 0) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.READ_FAIL));
    }

    // 성공
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.READ_SUCCESS, post[0]));
});

// 게시글 생성
router.post("/", async (req, res) => {
    const {
        author,
        title,
        content,
    } = req.body;

    // request data 확인
    if (!author || !title || !content) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    // 생성
    const postIdx = await Post.writePost(author, title, content);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, resMessage.CREATED_POST, postIdx));
});

// 게시글 고유 id값을 가진 게시글을 수정
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const {
        title,
        content
    } = req.body;

    // request data 확인
    if (!id) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    const post = await Post.updatePost(id, title, content);
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.MODIFY_POST, {
        modifyIdx: id
    }));
});

// 게시글 고유 id값을 가진 게시글을 삭제
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    // request data 확인
    if (!id) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    const result = await Post.deletePost(id);
    res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.DELETE_POST, {
        deleteIdx: id
    }));
});

module.exports = router;