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
            let luckyNumber = Math.round(Math.random() * 100)
            array.push({ luckyNumber, isEven: luckyNumber % 2 === 0 })
        }
        return array;
    }

    let n = 100000
    let array = createArray(n)
    let logger = new Logger(
        'Reducer.partitionBy[key]',
        n,
        array[0],
        filename,
        'Partitions array to be separated by objects key `isEven`'
    )

    suite.add('[declarative-js] Reducer.partitionBy | ', function () {
        array.reduce(Reducer.partitionBy('isEven'), [[], []])
    })
    suite.add('[lodash] _.partition| ', function () {
        _.partition(array, 'isEven')
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
