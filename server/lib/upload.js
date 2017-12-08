const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: path.join('public', 'uploads', 'items'),
  filename: filename
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
  files: 1
});

function filename(req, file, cb) {
  cb(null, Date.now() + '-' + file.originalname.split(' ').join(''));
}

module.exports = upload;
