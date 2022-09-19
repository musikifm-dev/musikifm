const mongoose = require('mongoose')
const Url = require("url");

const { Schema } = mongoose;

const PodcastsSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    src:String
});

const Podcasts = mongoose.model("Podcasts", PodcastsSchema);

module.exports = Podcasts;