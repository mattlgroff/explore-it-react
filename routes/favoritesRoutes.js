const favoritesController = require("../controllers/favoritesController.js");

module.exports = app => {

  //Remove Favorite
  app.put("/remove-favorite", favoritesController.remove);

  //Works to add favorite
  app.put("/add-favorite", (req, res) => {
    favoritesController.addOne(req, res);
  });

  //Also works to get all favorites
  app.get("/favorites/:profile", (req, res) => {
    favoritesController.findAllFavorites(req, res);
  });


}
