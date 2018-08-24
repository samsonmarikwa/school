// Education article
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

const connection = mongoose.createConnection("mongodb://localhost/virtualschool");
autoIncrement.initialize(connection);

const educationSchema = new Schema({
  personId: { type: Number, required: true },
  articleId: { type: Number, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true},
  notify: String,
  dateCreated: {type: Date, default: Date.now()}
});

educationSchema.plugin(autoIncrement.plugin, {
  model: "Education",
  field: "articleId",
  startAt: 1000
});

const Education = connection.model("Education", educationSchema);

module.exports = Education;
