const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const apiSchema = new Schema({
  id: {type:String, unique: true},
  name: String,      
});

const NewApi = mongoose.model('NewApi', apiSchema);
module.exports = NewApi;
