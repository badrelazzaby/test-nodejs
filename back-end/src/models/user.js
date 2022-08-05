const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  email: {
    type: String,
  },
  telephone: {
    type: String,
  },
  adresse: {
    type: String,
  }
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;