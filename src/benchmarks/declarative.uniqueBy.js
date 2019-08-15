var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var toBe = djs.toBe
var Logger = require('../_output').Logger


let benchmark = (filename) => {
    function createArray(length) {
        let array = []
        for (let index = 0; index < length; index++) {
            let luckyNumber = Math.round(Math.random() * 100) + 'id'
            array.push({ index: index % 5 })
        }
        return array;
    }

    let n = 1000000
    let array = createArray(n)
    let logger = new Logger('toBe.uniqueBy', n, array[0], filename)
    suite.add('[declarative-js] toBe.uniqueBy | ', function () {
        array.filter(toBe.uniqueBy('luckyNumber'))
    })
    suite.add('[lodash] _.uniqBy  | ', function () {
        _.uniqBy(array, 'luckyNumber')
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
