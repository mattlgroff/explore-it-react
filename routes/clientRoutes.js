const path = require('path');

module.exports = app => {
  //Sends Grossmont Client
  app.get("/grossmont", (req, res) => {
    res.sendFile(path.join(__dirname, "../grossmont-client/build/index.html"));
  });

  //Sends Belmont Client
  app.get("/belmont", (req, res) => {
    res.sendFile(path.join(__dirname, "../belmont-client/build/index.html"));
  });

}
