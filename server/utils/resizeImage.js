const sharp = require("sharp");

exports.thumbnailIMG = (image, directoryName, fileName) => {
  sharp(image)
    .resize(200, 200)
    .toFile(`server/images/${directoryName}/` + "thumbnail-" + fileName, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    });
};