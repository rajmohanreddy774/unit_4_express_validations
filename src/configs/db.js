const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://RajMohanReddy:LUh3sl7jMzWSHGh1@cluster0.jg2fm.mongodb.net/evalassign?retryWrites=true&w=majority"
  );
};
