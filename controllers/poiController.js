const db = require("../models");
const mongoose = require('mongoose')

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.POI
    .find()
    .sort({ category: 1, name: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findAllFavorites: function(req, res){
    let IDsArray = []
    req.body.forEach(callback);
    function callback(id) {
      IDsArray.push(new mongoose.Types.ObjectId(id))
    }
    db.POI
    .find({_id: {$in: IDsArray}})
    .then(dbModel => {
      res.json(dbModel)
    })
    .catch(err => res.status(422).json(err))
  },
  findOne: function(req, res){
    db.POI
    .findById({ _id: req.params.id })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

};
