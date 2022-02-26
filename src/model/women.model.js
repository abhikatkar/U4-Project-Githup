const mongoose = require("mongoose");

const womenSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    img:{type:String, required:true},
    maker:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:String, required:true},
},{
    versionKey: false,
    timestamps:true,
});

module.exports = mongoose.model("women", womenSchema);