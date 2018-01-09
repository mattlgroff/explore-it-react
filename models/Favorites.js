const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  id: { type: Number, required: true },
  list: { type: Array }
});

const Favorites = mongoose.model("Favorites", FavoritesSchema);

module.exports = Favorites;
