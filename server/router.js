// const path = require('path');
// const db = require('./controllers/controller');

// module.exports = function(app) {
//     // Ensures your react app is being served at all times
//     app.get('*', function(req, res, next){
//         res.sendFile(__dirname, '../client/build/index.html');
//     });

//     // Wire up API routes here!
// }

//thapeko
const path = require("path");
const passportService = require("./config/passport");
const Authentication = require("./controllers/authentication");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/api", requireAuth);
  // If the password / username combination is correct, give the user a token. If no, don't authenticate
  app.post("/api/signin", requireSignin, Authentication.signin);
  app.post("/api/signup", Authentication.signup);
  app.get("*", function(req, res, next) {
    res.sendFile(__dirname, "../client/build/index.html");
  });

  // Wire up API routes here!
};
