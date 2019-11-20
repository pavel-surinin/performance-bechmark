var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var Reducer = djs.Reducer
var Logger = require('../_output').Logger


let benchmark = (filename) => {
    function createArray(length) {
        let array = []
        for (let index = 0; index < length; index++) {
            let luckyNumber = Math.round(Math.random() * 100) + 'id'
            array.push(luckyNumber)
        }
        return array;
    }

    let n = 100000
    let array = createArray(n)
    let logger = new Logger(
        'Reducer.zip',
        n,
        array[0],
        filename,
        'Zips array with shallow copy of origin array'
    )

    suite.add('[declarative-js] Reducer.zip | ', function () {
        array.reduce(Reducer.zip(array.concat()), [])
    })
    suite.add('[lodash] _.zip  | ', function () {
        _.zip(array, array.concat())
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
