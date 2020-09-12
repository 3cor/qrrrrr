const fs = require('fs');
const jpeg = require('jpeg-js');
const jsQR = require("jsqr");

function readImg(imgPath) {
    let jpegData = fs.readFileSync(imgPath);
    let rawImageData = jpeg.decode(jpegData);
    console.log(rawImageData);
    return(rawImageData);
}

function readQR(rawImageData) {
    const code = jsQR(rawImageData.data, rawImageData.width, rawImageData.height)
    console.log("Found QR code", code);
}

module.export = {
    readImg,
    readQR
}
