const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    Time:String,
    Type:String,
    Title:String,
    Text:String,
    filename:String,
    filesize:String,
    base64:String
})

module.exports = Token = mongoose.model('token',TokenSchema)