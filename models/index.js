const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.logical_fallacies = require("./fallacies.model.js")(mongoose);
db.content = require("./content.model.js")(mongoose);

module.exports = db;