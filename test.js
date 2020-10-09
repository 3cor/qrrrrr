const tsqr = require('./app')

imgFile = process.argv.slice(2)[0]

c onst qrData = tsqr.readQR(tsqr.readImg(imgFile))
console.log('ALL QR DATA:\n', qrData)
console.log('ONLY data:\n', qrData.data)
