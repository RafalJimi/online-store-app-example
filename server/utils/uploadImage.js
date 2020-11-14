const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./server/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("Only jpg, png are allowed."), false);
    }
    cb(null, true);
  },
});

exports.uploadImage = multer({ storage: storage }).single("file");