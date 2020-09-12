const tsqr = require('./app')

imgFile = process.argv.slice(2)[0]

tsqr.readQR(tsqr.readImg(imgFile))

