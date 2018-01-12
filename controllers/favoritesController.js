const db = require("../models");

// Defining methods for the favoritesController
module.exports = {
  findAllFavorites: function(req, res) {
    let profile = req.body.profile;

    db.Favorites
      .find(profile)
      .sort({ list: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  addOne: function(req, res) {
    console.log(req.body);
    let profile = req.body.profile;
    let list =  req.body.list;
    console.log("Hit addOne controller option");
    console.log("Profile: " + profile);
    console.log("List: " + list);

    db.Favorites
      .findOne({profile: profile}, {$push: {list: req.body.list}})
      .then(dbModel => {
        console.log(dbModel)
        return res.json(dbModel)
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  remove: function(req, res) {
    let profile = req.body.profile;
    let list =  req.body.list;
    console.log("Hit Remove controller option");
    console.log("Profile: " + profile);
    console.log("List: " + list);

    db.Favorites
      .find({ profile: req.body.profile, list: req.body.list })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
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
  }
};
