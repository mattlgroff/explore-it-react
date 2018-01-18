const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-892472.oktapreview.com/oauth2/default',
  assertClaims: {
    aud: 'api://default',
  },
});

function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

const app = express();

/**
 * For local testing only!  Enables CORS for all domains
 */
app.use(cors());

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("grossmont-client/build"));
app.use(express.static("belmont-client/build"));

// Routes
require("./routes/poiRoutes.js")(app);
require("./routes/favoritesRoutes.js")(app);
require("./routes/clientRoutes.js")(app);


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
