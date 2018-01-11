const favoritesController = require("../controllers/favoritesController.js");

module.exports = app => {

  //Remove Favorite
  app.post("/remove-favorite", (req, res) => {
    favoritesController.remove(req, res);
  });

  //Works to add favorite
  app.post("/favorites", (req, res) => {
    favoritesController.addOne(req, res);
  });


  //Also works to get all favorites
  app.get("/favorites", (req, res) => {
    favoritesController.findAllFavorites(req, res);
  });


  //Array of favorites in controller function is returning blank
  app.get("/is-favorite", (req, res) => {
    favoritesController.isFavorite(req, res);
  });

}