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
  findAllFavoritePois: function(req, res){
    console.log('req.body.listArr', req.body.listArr)
    let reqArr = req.body.listArr;
    const IDsArray = reqArr.map(id => new mongoose.Types.ObjectId(id))
    db.POI
    .find({_id: {$in: IDsArray}})
    .then(dbModel => {
      res.json(dbModel)
    })
    .catch(err => res.status(422).json(err))
  },
  findOne: function(req, res){
    console.log(req.params.id)
    db.POI
    .findById({ _id: req.params.id })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

};
