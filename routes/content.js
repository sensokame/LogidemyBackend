var express = require('express');
var router = express.Router();

const fallacies = require("../controllers/db_controller.js")

/* GET CONTENT FROM DATABASE */
router.get('/:title',fallacies.findContent);

module.exports = router;