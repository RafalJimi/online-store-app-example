const sharp = require("sharp");

exports.sliderIMG = (image, fileName) => {
  sharp(image)
    .resize(500, 500)
    .toFile("server/images/" + "slider-" + fileName, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    });
};

exports.thumbnailIMG = (image, fileName) => {
  sharp(image)
    .resize(200, 200)
    .toFile("server/images/" + "thumbnail-" + fileName, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    });
};