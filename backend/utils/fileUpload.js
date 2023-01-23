const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        console.log(req.files)
        cb(null, path.resolve(__dirname, '..') + '/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage })
const fileUpload = upload.array('file')

module.exports = fileUpload