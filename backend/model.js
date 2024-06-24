const mongoose = require('mongoose')
const RecordSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const recipe_usersModel = mongoose.model('users',RecordSchema )
module.exports = recipe_usersModel