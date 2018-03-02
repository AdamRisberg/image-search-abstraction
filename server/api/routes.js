var router = require("express").Router();

router.get("/imagesearch/:term", function(req, res) {
  res.send("SEARCH ROUTE");
});

router.get("/latest/imagesearch", function(req, res) {
  res.send("LATEST ROUTE");
});

module.exports = router;