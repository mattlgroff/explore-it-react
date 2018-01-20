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
    let email = req.body.email;
    let fave =  req.body.list;
    console.log("Hit addOne controller option");
    console.log("email: " + email);
    console.log("List: " + fave);
    db.Favorites
      .findOneAndUpdate({email: email}, { $addToSet: { list: fave }}, {new: true, upsert: true})
      .then((dbModel) => res.json(dbModel))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  isFavorite: function(req, res){
    let email = req.body.email;
    let list = req.body.list;

    db.Favorites
      .find({email: email, list: list})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err);
        res.status(422).json(err)
      });
  },
  remove: function(req , res){
    let email = req.body.email;
    let fave =  req.body.list;
    console.log("Hit Remove controller option");
    console.log("email: " + email);
    console.log("List: " + fave);
    db.Favorites
      .findOneAndUpdate({email: email}, {$pull: { list: fave }}, {new: true})
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
