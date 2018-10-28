var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var user = require("../models/user.js");
var passport = require("passport");
require("../config/passport")(passport);

// get user information from here
//update user information here
// router.get("/", passport.authenticate("jwt", { session: false }), function(
//   req,
//   res
// ) {
//   var token = getToken(req.headers);
//   if (token) {
//     user.find(function(err, books) {
//       if (err) return next(err);
//       res.json(books);
//     });
//   } else {
//     return res.status(403).send({ success: false, msg: "Unauthorized." });
//   }
// });

/* SAVE BOOK */
router.post(
  "/signup",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      user.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
