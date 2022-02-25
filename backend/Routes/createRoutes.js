const express = require('express')
const createController = require("../Controllers/createController");

const router = express.Router();
router.route('/')
    .post(createController.createUser)   


module.exports = router;