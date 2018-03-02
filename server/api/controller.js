var RecentSearch = require("./model");
var GoogleImages = require("google-images");

function search(req, res, next) {
  var term = req.params.term;
  var page = req.query.offset || 0;

  RecentSearch
    .create({ search_term: term, when: new Date() })
    .then(function(search) {
      res.send("SEARCHING: " + term + ", Page: " + page);
    })
    .catch(function(err) {
      next(err);
    });
}

function latest(req, res, next) {
  RecentSearch
    .find({})
    .sort("-when")
    .limit(10)
    .exec()
    .then(function(searches) {
      res.json(searches);
    })
    .catch(function(err) {
      next(err);
    });
}

module.exports = { search, latest };