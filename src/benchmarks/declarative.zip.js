var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var Reducer = djs.Reducer
var Logger = require('../_output').Logger
var L = require('list')
var R = require('ramda')

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
    let array2 = createArray(n)
    var list = L.from(array)
    var list2 = L.from(array2)

    let logger = new Logger(
        'Reducer.zip',
        n,
        array[0],
        filename,
        'Zips array with shallow copy of origin array'
    )

    suite.add('[declarative-js] Reducer.zip | ', function () {
        array.reduce(Reducer.zip(array2), [])
    })

    suite.add('[list] zip | ', function () {
        L.zip(list, list2)
    })

    suite.add('[ramda] zip | ', function () {
        R.zip(array, array2)
    })

    suite.add('[lodash] _.zip  | ', function () {
        _.zip(array, array2)
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
