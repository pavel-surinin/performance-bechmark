var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var Sort = djs.Sort
var linq = require('linq')
var Logger = require('../_output').Logger
var L = require('list')
var R = require('ramda')

let benchmark = (filename) => {
    function createArray(length) {
        let array = []
        for (let index = 0; index < length; index++) {
            let luckyNumber = Math.round(Math.random() * 100)
            let age = Math.round(Math.random() * 100)
            array.push({ luckyNumber, age })
        }
        return array;
    }

    let n = 10000
    let array = createArray(n)
    let logger = new Logger('Sort.ascendingBy', n, array[0], filename)

    suite.add('[declarative-js] Sort.ascendingBy /getter/ | ', function () {
        createArray(n).sort(Sort.ascendingBy(x => x.luckyNumber))
    })
    suite.add('[ramda] sortBy | ', function () {
        const sortBy = R.sortBy(R.prop('luckyNumber'));
        sortBy(array);
    })
    suite.add('[declarative-js] Sort.ascendingBy /key/ | ', function () {
        createArray(n).sort(Sort.ascendingBy('luckyNumber'))
    })
    suite.add('[lodash] _.sortBy /getter/ | ', function () {
        _.sortBy(createArray(n), x => x.luckyNumber)
    })
    suite.add('[list] sortBy | ', function () {
        L.sortBy(x => x.luckyNumber, L.from(createArray(n)))
    })
    suite.add('[lodash] _.sortBy  /key/ | ', function () {
        _.sortBy(createArray(n), 'luckyNumber')
    })
    suite.add('[linq] orderBy  | ', function () {
        linq.from(createArray(n)).orderBy(x => x.luckyNumber).toArray()
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
