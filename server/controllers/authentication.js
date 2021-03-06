const jwt = require("jwt-simple");
require("dotenv").config();
// const config = require('../config');
const User = require("../models/user");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.APP_SECRET);
}

exports.signin = function(req, res, next) {
  //User has already had email and password authed
  //We just need to give them a token
  console.log(req.body);
  res.json({ token: tokenForUser(req.user), msg: "hello" });
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const state = req.body.state;
  const username = req.body.username;
  console.log(req.body);
  // get the rest of the form values off of req.body

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  //See if user with a given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) return next(err);

    //If yes, return error
    if (existingUser) return res.status(422).send({ error: "Email is in use" });

    const user = new User({
      email,
      password,
      state,
      username
      // add the rest of the info from the form and save it to its proper place in the schema
    });

    console.log(user);

    user.save(function(err) {
      if (err) return next(err);
      //If no, respond to request indicating user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
