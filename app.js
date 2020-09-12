const fs = require('fs');
const jpeg = require('jpeg-js');
const jsQR = require("jsqr");

function readImg(imgPath) {
    let jpegData = fs.readFileSync(imgPath);
    let rawImageData = jpeg.decode(jpegData);
    console.log('----READ IMAGE FILE----\n', rawImageData);
    return(rawImageData);
}

function readQR(rawImageData) {
    const code = jsQR(rawImageData.data, rawImageData.width, rawImageData.height)
    console.log("----READ QR CODE----\n", code);
}

module.exports = {
    readImg,
    readQR
}

