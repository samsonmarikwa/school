const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

const connection = mongoose.createConnection("mongodb://localhost/virtualschool");
autoIncrement.initialize(connection);

const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true},
  startDate: {type: Date, default: Date.now()},
  subjects: [],
  terms: String,
  cellphone: String,
  userType: String,
  personId: Number
});

personSchema.plugin(autoIncrement.plugin, {
  model: "Person",
  field: "personId",
  startAt: 1000
});

const Person = connection.model("Person", personSchema);

module.exports = Person;
