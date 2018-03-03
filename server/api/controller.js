var RecentSearch = require("./model");
var GoogleImages = require("google-images");

var searchClient = new GoogleImages(process.env.SEARCHID, process.env.SEARCHKEY);

function search(req, res, next) {
  var term = req.params.term;
  var page = req.query.offset || 0;

  RecentSearch
    .create({ search_term: term, when: new Date() })
    .then(function(search) {
      searchClient.search(term, { page })
        .then(function(images) {
          res.json(filterResults(images));
        })
        .catch(function(err) {
          next(err);
        });
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

function filterResults(results) {
  return results.map(function(image) {
    return {
      url: image.url,
      snippet: image.description,
      thumbnail: image.thumbnail.url,
      context: image.parentPage
    };
  });
}

module.exports = { search, latest };