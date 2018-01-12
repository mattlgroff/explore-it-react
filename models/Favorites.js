const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  profile: { type: String, required: true },
  list: { type: Array, unique: true }
});

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;
