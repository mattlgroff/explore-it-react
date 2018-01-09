const router = require("express").Router();
const favoritesController = require("../../controllers/favoritesController");

// Matches with "/api/favorites"
router.route("/")
  .get(favoritesController.findAll)
  .post(favoritesController.addOne)

module.exports = router;
