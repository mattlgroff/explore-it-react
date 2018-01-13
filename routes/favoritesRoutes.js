const favoritesController = require("../controllers/favoritesController.js");

module.exports = app => {

  //Remove Favorite
  app.post("/belmont/remove-favorite", favoritesController.remove);

  //Works to add favorite
  app.post("/belmont/favorites", (req, res) => {
    favoritesController.addOne(req, res);
  });


  //Also works to get all favorites
  app.get("/belmont/favorites/:profile", (req, res) => {
    favoritesController.findAllFavorites(req, res);
  });


  //Array of favorites in controller function is returning blank
  app.get("/belmont/is-favorite", (req, res) => {
    favoritesController.isFavorite(req, res);
  });

}