const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    img:{type:String, required:true},
    maker:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number, required:true},
},{
    versionKey: false,
    timestamps:true,
});

module.exports = mongoose.model("men", menSchema);
