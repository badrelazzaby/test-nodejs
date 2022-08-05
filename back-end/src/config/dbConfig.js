const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.DB_URL;

 const dbConfig = mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Error connecting with DB",error);
    } else {
      console.log("Connecte To DB");
    }
  }
);

module.exports = dbConfig