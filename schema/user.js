var mongoose = require('mongoose');
var Schema = mongoose.Schema,

ObjectId = Schema.ObjectId;
var myuser = new Schema({
name :String,
sobrenome :String
});
module.exports = mongoose.model('users', myuser);