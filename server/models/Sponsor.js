const mongoose = require("mongoose");
const timestampPlugin = require("./plugins/timestamp");
const SponsorSchema = new mongoose.Schema({
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

SponsorSchema.plugin(timestampPlugin);

const Sponsor = mongoose.model("Sponsor", SponsorSchema);

module.exports = Sponsor;
