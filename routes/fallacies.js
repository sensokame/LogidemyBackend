var express = require('express');
var router = express.Router();

const fallacies = require("../controllers/db_controller.js")

/* GET ALL FALLACIES FROM DATABASE */
router.get('/',fallacies.findAll);

/* GET FALLACIES CATEGORIES */
router.get('/ByCategory', fallacies.findAllByCategory)

/* GET FALLACY BY NAME */
router.get('/:id', fallacies.findOne);

module.exports = router;