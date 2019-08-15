let fs = require('fs')
let outputPath = require('./_output').OUTPUT_FILE_NAME

// clear output file
fs.writeFileSync(outputPath, '')

// generate benchmarks
let files = fs.readdirSync('./src/benchmarks');
files.forEach((filename) => {
    let benchmark = require('./benchmarks/' + filename).benchmark
    benchmark('./src/benchmarks/' + filename)
})