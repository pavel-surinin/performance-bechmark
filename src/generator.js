let packagejson = require('../package.json')
let fs = require('fs')
let outputPath = require('./_output').OUTPUT_FILE_NAME

let header = `
## Versions: 
 - node.js: _10.15.3_ 
 - declarative-js: _${packagejson.dependencies['declarative-js']}_
 - lodash: _${packagejson.dependencies['lodash']}_
 - linq: _${packagejson.dependencies['linq']}_

`

// clear output file
fs.writeFileSync(outputPath, header)

// generate benchmarks
let files = fs.readdirSync('./src/benchmarks');
files.forEach((filename) => {
    let benchmark = require('./benchmarks/' + filename).benchmark
    benchmark('https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/' + filename)
})

fs.copyFileSync(
    outputPath,
    './history/benchmark-' + packagejson.dependencies['declarative-js'] + '.md'
)