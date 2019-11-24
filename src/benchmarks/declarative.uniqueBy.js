var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var R = require('ramda')
var toBe = djs.toBe
var Logger = require('../_output').Logger


let benchmark = (filename) => {
    function createArray(length) {
        let array = []
        for (let index = 0; index < length; index++) {
            array.push({ index: index % 5 })
        }
        return array;
    }

    let n = 1000000
    let array = createArray(n)
    let logger = new Logger('toBe.uniqueBy', n, array[0], filename)

    suite.add('[declarative-js] toBe.uniqueBy /key/ | ', function () {
        array.filter(toBe.uniqueBy('index'))
    })
    suite.add('[declarative-js] toBe.uniqueBy /function/ | ', function () {
        array.filter(toBe.uniqueBy(x => x.index))
    })
    suite.add('[lodash] _.uniqBy | ', function () {
        _.uniqBy(array, 'index')
    })
    suite.add('[ramda] _.uniqBy  | ', function () {
        R.uniqBy(x => x.index, array)
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
