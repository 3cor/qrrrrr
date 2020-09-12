const fs = require('fs');
const jpeg = require('jpeg-js');
const jsQR = require("jsqr");

function readImg(imgPath) {
    let jpegData = fs.readFileSync(imgPath);
    let rawImageData = jpeg.decode(jpegData);
    return(rawImageData);
}

function readQR(rawImageData) {
    const code = jsQR(rawImageData.data, rawImageData.width, rawImageData.height)
    return code
}

module.exports = {
    readImg,
    readQR
}

