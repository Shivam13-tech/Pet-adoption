const express = require('express')
const loginController = require("../Controllers/loginController")

const router = express.Router();
router.route('/')
    .post(loginController.userLogin)

module.exports = router;