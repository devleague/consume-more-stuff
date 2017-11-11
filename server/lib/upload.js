const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const storage = multer.diskStorage({
  destination: destination,
  filename: filename
});
const upload = multer({
  storage: storage
});

function destination(req, file, cb) {
  cb(null, 'public/uploads/items');
}

function filename(req, file, cb) {
  crypto.pseudoRandomBytes(16, function(err, raw) {
    cb(null, raw.toString('hex') + Date.now() + '.' + mime.ex);
  });
}


module.exports = upload;
