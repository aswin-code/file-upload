const { getAllFolders, createAFolder, getAFolder, uploadFiles } = require('../controller/folder')
const fileUpload = require('../utils/fileUpload')

const router = require('express').Router()


router.route('/')
    .get(getAllFolders)
    .post(createAFolder)
router.route('/:id')
    .get(getAFolder)
    .post(fileUpload, uploadFiles)

module.exports = router