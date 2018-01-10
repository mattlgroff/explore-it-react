const poiController = require("../controllers/poiController.js");

module.exports = app => {
  //Sends JSON of every POI in our database
  app.get("/poi/all", (req, res) => {
    poiController.findAll(req, res);
  });

  //Sends JSON of one POI in our database
  app.get("/poi/:id", (req, res) => {
    poiController.findOne(req, res, req.params.id);
  });



}