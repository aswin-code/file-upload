const mongoose = require("mongoose")

const folderSchema = mongoose.Schema({
    name: { type: String },
    files: [String]
})

const folderModel = mongoose.model('folder', folderSchema)

module.exports = folderModel