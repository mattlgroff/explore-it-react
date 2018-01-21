const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));
app.use(express.static("photos"));

// Routes
require("./routes/poiRoutes.js")(app);
require("./routes/favoritesRoutes.js")(app);
require("./routes/clientRoutes.js")(app);
require("./routes/authRoutes.js")(app);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/belmont",
  {
    useMongoClient: true
  }
)
.then(stuff => console.log("Connected to MongoDB"))
.catch(err => console.error(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
