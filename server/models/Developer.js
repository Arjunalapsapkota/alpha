const mongoose = require("mongoose");
const timestampPlugin = require("./plugins/timestamp");
const DeveloperSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  idDev: {
    type: Boolean,
    default: false
  }
});

DeveloperSchema.plugin(timestampPlugin);

const Developer = mongoose.model("Developer", DeveloperSchema);

module.exports = Developer;
