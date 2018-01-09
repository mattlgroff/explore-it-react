const router = require("express").Router();
const poiRoutes = require("./poi");
const favoritesRoutes = require("./favorites");

// Book routes
router.use("/poi", poiRoutes);
router.use("/favorites", favoritesRoutes);

module.exports = router;
