var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var toBe = djs.toBe
var linq = require('linq')
var R = require('ramda')
var arrayUniq = require('array-uniq')
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

    let n = 1000000
    let array = createArray(n)
    let logger = new Logger('toBe.unique', n, array[0], filename)

    suite.add('[declarative-js] toBe.unique | ', function () {
        array.filter(toBe.unique())
    })
    suite.add('[ramda] uniq | ', function () {
        R.uniq(array)
    })
    suite.add('[lodash] _.uniq  | ', function () {
        _.uniq(array)
    })
    suite.add('[array-uniq] | ', function () {
        arrayUniq(array)
    })
    suite.add('[linq] distinct  | ', function () {
        linq.from(array).distinct().toArray()
    })
    suite.add('[native] new Set() | ', function () {
        Array.from(new Set(array))
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
