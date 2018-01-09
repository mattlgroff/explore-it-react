const router = require("express").Router();
const poiController = require("../../controllers/poiController");

// Matches with "/api/poi"
router.route("/")
  .get(poiController.findAll)

// Matches with "/api/poi/:id"
router
  .route("/:id")
  .get(poiController.findById)

module.exports = router;
