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
    collection:"Bio_movies"
});
module.exports =mongoose.model('movie',movieModel);
