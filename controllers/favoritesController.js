const db = require("../models");


// Defining methods for the favoritesController
let favoritesController = {
  findAllFavorites: function(req, res) {

    let honey = req.params.profile;
    db.Favorites
      .findOne({profile: honey})
      .then(results => res.json({list: results.list}))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  addOne: function(req, res) {
    console.log(req.body);
    let profile = req.body.profile;
    let fave =  req.body.list;
    console.log("Hit addOne controller option");
    console.log("Profile: " + profile);
    console.log("List: " + fave);


    db.Favorites
      .findOrCreate({profile: profile})
      .then(results => db.Favorites.update({profile: profile} , { $addToSet: { list: fave } }))
      .then((dbModel) => res.json(dbModel))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  isFavorite: function(req, res){
    let profile = req.body.profile;
    let list = req.body.list;

    db.Favorites
      .find({profile: profile, list: list})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  remove: function(req , res){
    let profile = req.body.profile;
    let fave =  req.body.list;
    console.log("Hit Remove controller option");
    console.log("Profile: " + profile);
    console.log("List: " + fave);

    db.Favorites
      .update({profile: profile} , { $pull: { list: fave } })
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
