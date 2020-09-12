# tsqr-reader

TypScript QR Code reader? No, this is TSQR Reader - Too Simple Quick Response (Code) Reader.

There are two functions:

readImg: receive FILE_PATH.jpg and return object in [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) format.

readQR: receive ImageData (from readImg) and return QR code data.

## Dependencies

```
"dependencies": {
  "jpeg-js": "^0.4.2",
  "jsqr": "^1.3.1"
},
```

## Try it on command-line

In the module directory,

```
node test.js IMG_FILE.jpg
```

## How to use it in applications

Read image file and get QR code data to qrData

```
// Import this module (Point to app.js)
const tsqr = require(PATH_TO_THIS_MODULE)

// Read QR code data
const qrData = tsqr.readQR(readImg(IMG_FILE_PATH))

// Print the whole thing
console.log('ALL QR DATA:\n', qrData)
// Print only the dat apart
console.log('ONLY data:\n', qrData.data)
```
