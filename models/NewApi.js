const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const clashSchema = new Schema({
  id: {type:String, unique: true},
  name: String,      
});

const Clash = mongoose.model('Clash', clashSchema);
module.exports = Clash;
