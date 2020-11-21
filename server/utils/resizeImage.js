const sharp = require("sharp");

/* exports.sliderIMG = (image, directoryName, fileName) => {
  sharp(image)
    .resize(500, 500)
    .toFile(`server/images/${directoryName}/` + "slider-" + fileName, (err, resizeImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resizeImage);
      }
    });
}; */

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