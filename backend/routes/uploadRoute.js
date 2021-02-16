import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'upload')
  },
  filename(req, file, callback) {
    callback(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    )
  },
})

function checkFileType(file, callback) {
  const fileTypes = /jpg|jpeg|png/
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = fileTypes.test(file.mimetype)

  if (extname && mimetype) {
    return callback(null, true)
  }
  return callback('Images only!')
}

const upload = multer({
  storage,
  fileFilter(req, file, callback) {
    checkFileType(file, callback)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`${req.file.path}`)
})
export default router
