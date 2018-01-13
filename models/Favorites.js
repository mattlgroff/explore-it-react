const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const findOrCreate = require("mongoose-findorcreate");

const FavoritesSchema = new Schema({
  profile: { type: String, required: true },
  list: { type: Array, unique: true }
});


FavoritesSchema.plugin(findOrCreate);

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;
