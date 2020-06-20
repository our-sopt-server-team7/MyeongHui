const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authUtil = require('../middlewares/auth').checkToken;

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

module.exports = router;