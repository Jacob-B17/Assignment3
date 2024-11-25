//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let movieModel = mongoose.Schema({
    MovieTitle: String,
    Type:String,
    Director: String,
    YearPublished: String,
    Description: String,
    Price: Number
},
{
    collection:"Bio_Movies"
});
module.exports =mongoose.model('Movie',movieModel);
