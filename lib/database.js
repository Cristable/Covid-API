const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/PaseCovidAPI";

mongodb: mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const schema = mongoose.Schema({
  Active: Number,
  Confirmed: Number,
  Country: String,
  Deaths: Number,
  Recoveries: Number,
  Date: String,
});

const Case = mongoose.model("case", schema);

module.exports = Case;
