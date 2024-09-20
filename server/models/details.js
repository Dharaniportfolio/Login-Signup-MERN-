const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const detailModel = mongoose.model('detail',detailSchema)
module.exports = detailModel