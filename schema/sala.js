
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var mysala = new Schema({
sala :String,
lotacao :Number
});
module.exports = mongoose.model('salas', mysala);