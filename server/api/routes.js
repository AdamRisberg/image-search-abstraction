var router = require("express").Router();
var controller = require("./controller");

router.get("/imagesearch/:term", controller.search);
router.get("/latest/imagesearch", controller.latest);

module.exports = router;