const favoritesController = require("../controllers/favoritesController.js");

module.exports = app => {

  //Remove Favorite
  app.post("/remove-favorite", (req, res) => {
    favoritesController.remove(req, res);
  });

  app.post("/favorites", (req, res) => {
    favoritesController.addOne(req, res);
  });

  app.get("/favorites", (req, res) => {
    favoritesController.findAllFavorites(req, res);
  });

  app.get("/is-favorite", (req, res) => {
    favoritesController.isFavorite(req, res);
  });

}