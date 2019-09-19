let fs = require('fs')
let outputPath = require('./_output').OUTPUT_FILE_NAME

// clear output file
fs.writeFileSync(outputPath, '')

let testname = process.argv.slice(2)[0]
let filename = `./benchmarks/declarative.${testname}.js`
let benchmark = require(filename).benchmark
benchmark('https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/' + filename)