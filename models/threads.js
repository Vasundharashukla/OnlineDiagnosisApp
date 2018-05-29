var mongoose = require("mongoose");

var threadSchema = mongoose.Schema({
    title: String,
    date: Date,
    author: String,
    description: String
});

module.exports = mongoose.model("Thread", threadSchema);