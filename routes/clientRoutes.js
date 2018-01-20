const path = require('path');

module.exports = app => {

  //Sends Client
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

}
