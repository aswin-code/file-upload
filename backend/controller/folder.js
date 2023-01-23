const folderModel = require("../model/folder")
const { tryCatch } = require("../utils/tryCatch")

exports.getAllFolders = tryCatch(async (req, res) => {
    const folders = await folderModel.find({})
    return res.status(200).json(folders)
})

exports.getAFolder = tryCatch(async (req, res) => {
    const folder = await folderModel.findById(req.params.id)
    if (!folder) return res.status(404).json({ message: "folder not found" })
    return res.status(200).json(folder)
})

exports.createAFolder = tryCatch(async (req, res) => {
    const folder = req.body.folder;
    if (!folder) return res.status(400).json({ message: "folder should need a name" })
    const newFolder = new folderModel({ name: folder })
    await newFolder.save()
    return res.status(201).json({ message: 'folder created successfully' })
})

exports.uploadFiles = tryCatch(async (req, res) => {
    if (req.files.file) return res.status(400).json({ message: "all fields require" })
    console.log(req.files)
    console.log()
    const files = req.files.map(e => e.filename)
    console.log(files)
    const file = await folderModel.findByIdAndUpdate(req.params.id, { $push: { files: files } }, { new: true })
    return res.status(201).json({ message: 'file uploaded successfully' })
})