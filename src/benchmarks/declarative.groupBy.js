var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var uuid = require('uuid')
var _ = require('lodash')
var groupBy = djs.Reducer.groupBy
var Map = djs.Reducer.Map
var linq = require('linq')
var Logger = require('../_output').Logger

let benchmark = (filename) => {
    let array = []
    for (let index = 0; index < 100000; index++) {
        let id = uuid()
        let luckyNumber = Math.round(Math.random() * 100) + 'id'
        array.push({ index, id, luckyNumber })
    }

    let logger = new Logger('Reduer.groupBy', 100000, array[0], filename)
    suite.add('[lodash] _.groupBy | ', function () {
        _.groupBy(array, 'luckyNumber');
    })
    suite.add('[linq] groupBy | ', function () {
        linq.from(array)
            .groupBy(x => x.luckyNumber)
            .toObject(x => x)
    })
    suite.add('[snippet] reduce | ', function () {
        array.reduce(function (acc, obj) {
            var key = obj["luckyNumber"];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {})
    })
    suite.add('[declarative-js] Reducer.groupBy | ', function () {
        array.reduce(groupBy('luckyNumber'), Map())
    })
        .on('cycle', function (event) {
            logger.addEvent(event);
        })
        .on('complete', function () {
            logger.writeResults()
        })
        .run({ minSamples: 1 })
}


module.exports = {
    benchmark
}
