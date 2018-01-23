const db = require("../models");


// Defining methods for the favoritesController
let favoritesController = {
  findAllFavorites: function(req, res) {
    db.Favorites
      .findOne({email: req.params.email})
      .then(results => res.json({list: results.list}))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  addOne: function(req, res) {
    //console.log(req.body);
    let userID = req.body._id;
    let poiID =  req.body.poiID;
    console.log("Hit addOne controller option");
    console.log("_id: " + userID);
    console.log("List: " + poiID);
    db.Favorites
      .findOneAndUpdate({_id: userID}, { $addToSet: { list: poiID }}, {new: true, upsert: true})
      .then((dbModel) => res.json(dbModel))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  remove: function(req , res){
    let userID = req.body._id;
    let poiID =  req.body.poiID;
    console.log("Hit Remove controller option");
    db.Favorites
      .findOneAndUpdate({_id: userID}, {$pull: { list: poiID }}, {new: true})
      .then(dbModel => {
        console.log('dbModel', dbModel)
        res.json(dbModel)
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  }
};

module.exports = favoritesController;
