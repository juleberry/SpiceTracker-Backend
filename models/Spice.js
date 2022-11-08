const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spiceSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: false },
  expDate: { type: Date, required: false},
  amt: { type: Number, required: true }
})

module.exports = mongoose.model('Spice', spiceSchema);