//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let movieModel = mongoose.Schema({
    Name: String,
    Author: String,
    Published: String,
    Description: String,
    Price: Number
},
{
    collection:"Bio_Movies"
});
module.exports =mongoose.model('Movie',movieModel);
