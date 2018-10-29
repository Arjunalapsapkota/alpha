const mongoose = require("mongoose");
const Developer = require("./index");

// Below is an example of a method that seeds your database
// Customize it to fit your needs, and execute it by calling it on a custom route
// Make sure to create your schemas and plug them in - this code won't work!
exports.seedDb = () => {
  try {
    Developer.insertMany([
      {
        _id: new mongoose.Types.ObjectId(),
        firstName: "George",
        lastName: "Edger",
        userName: "Gedger",
        password: "bluhbluh",
        state: "GA",
        isDev: true
      },
      {
        _id: new mongoose.Types.ObjectId(),
        firstName: "Bush",
        lastName: "Schwart",
        userName: "bushhhy",
        password: "bushy",
        state: "CA",
        isDev: false
      },
      {
        _id: new mongoose.Types.ObjectId(),
        firstName: "Michael",
        lastName: "Conning",
        userName: "Miconny",
        password: "mickey",
        state: "OH",
        isDev: true
      },
      {
        _id: new mongoose.Types.ObjectId(),
        firstName: "Tony",
        lastName: "Hazelnut",
        userName: "Tonuts",
        password: "jerk",
        state: "AZ",
        isDev: false
      },
      {
        _id: new mongoose.Types.ObjectId(),
        firstName: "Art",
        lastName: "Wood",
        userName: "ProductManager",
        password: "ourPM",
        state: "CA",
        isDev: true
      }
    ]).then(docs => console.log("Success!", docs));
  } catch (e) {
    console.log(e);
  }
};
