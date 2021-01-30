const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    Time:String,
    Type:String,
    Title:String,
    Text:String,
    filename:String,
    filesize:String,
    base64:String
})

module.exports = Profile = mongoose.model('profile',ProfileSchema)