  const mongoose = require("mongoose");

  module.exports = () =>{
      return mongoose.connect("mongodb+srv://Abhi:Abhigayatri_91@cluster0.jf0s8.mongodb.net/men?retryWrites=true&w=majority");
  }