const poiController = require("../controllers/poiController.js");

module.exports = app => {
  //Sends JSON of every POI in our database
  app.get("/belmont/poi/all", (req, res) => {
    poiController.findAll(req, res);
  });

  //Sends JSON of every Favorite POI in our database
  app.post("/belmont/poi/findFavorites", (req, res) => {
    poiController.findAllFavoritePois(req, res);
  });

  //Sends JSON of one POI in our database
  app.get("/belmont/poi/:id", (req, res) => {
    poiController.findOne(req, res, req.params.id);
  });



}
