var express = require("express");
var mongoose = require("mongoose");
var app = express();

var mongoUrl = process.env.DATABASEURL || "mongodb://localhost/image_search";

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl)
  .catch(function (err) {
    console.log(err.message);
  });

app.use(express.static("./public"));
app.use("/api", require("./api/routes"));

app.use(function(err, req, res, next) {
  res.status(500).send("Something went wrong.");
});

module.exports = app;