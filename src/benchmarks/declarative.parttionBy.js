var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var Reducer = djs.Reducer
var linq = require('linq')
var Logger = require('../_output').Logger


let benchmark = (filename) => {
    function createArray(length) {
        let array = []
        for (let index = 0; index < length; index++) {
            let luckyNumber = Math.round(Math.random() * 100)
            array.push(luckyNumber)
        }
        return array;
    }

    let n = 100000
    let array = createArray(n)
    let logger = new Logger(
        'Reducer.partitionBy[callback]',
        n,
        array[0],
        filename,
        'Partitions array to be even or odd by callback function `x => x % 2 === 0`'
    )

    suite.add('[declarative-js] Reducer.partitionBy | ', function () {
        array.reduce(Reducer.partitionBy(x => x % 2 === 0), [[], []])
    })
    suite.add('[lodash] _.partition| ', function () {
        _.partition(array, x => x % 2 === 0)
    })
    suite.add('[linq] partitionBy  | ', function () {
        linq.from(array).partitionBy(x => x % 2 === 0).toArray()
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
