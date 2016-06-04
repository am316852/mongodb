var mongoose=require("mongoose");
var UserSchema=mongoose.Schema({
Title:String,
Poster:String,
Year:String,
Actors:String,
Director:String,
Plot:String,
Released:String,
imdbRating:String
});
module.exports = mongoose.model("movie",UserSchema,"movie");
