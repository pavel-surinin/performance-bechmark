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
            array.push({ luckyNumber, index: index % 2, random: luckyNumber + 1, a: "a", b: "b", c: "c" })
        }
        return array;
    }

    let n = 10000
    let array = createArray(n)
    let logger = new Logger('toBe.unique (object content)', n, array[0], filename)
    suite.add('[declarative-js] toBe.unique | ', function () {
        array.filter(toBe.unique())
    })
    suite.add('[native] new Set() | ', function () {
        Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
