const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const POISchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true},
  lat: { type: Number, required: true},
  long: { type: Number, required: true},
  description: { type: String, required: true },
  img_url: { type: String, required: true }
});

const POI = mongoose.model("POI", POISchema);

module.exports = POI;
