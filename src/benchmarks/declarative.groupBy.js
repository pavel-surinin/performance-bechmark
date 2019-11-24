var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var uuid = require('uuid')
var _ = require('lodash')
var groupBy = djs.Reducer.groupBy
var Map = djs.Reducer.Map
var linq = require('linq')
var Logger = require('../_output').Logger
var L = require('list')
var R = require('ramda')

let benchmark = (filename) => {
    let array = []
    for (let index = 0; index < 100000; index++) {
        let id = uuid()
        let luckyNumber = Math.round(Math.random() * 100) + 'id'
        array.push({ index, id, luckyNumber })
    }
    var list = L.from(array)
    var lq = linq.from(array)

    let logger = new Logger('Reducer.groupBy', 100000, array[0], filename)

    suite.add('[lodash] _.groupBy /key/ | ', function () {
        _.groupBy(array, 'luckyNumber');
    })

    suite.add('[ramda] groupBy | ', function () {
        R.groupBy(x => x.luckyNumber, array)
    })

    suite.add('[lodash] _.groupBy /function/ | ', function () {
        _.groupBy(array, x => x.luckyNumber);
    })

    suite.add('[list] groupWith | ', function () {
        L.groupWith((a, b) => a.luckyNumber == b.luckyNumber, list)
    })

    suite.add('[linq] groupBy | ', function () {
        lq.groupBy(x => x.luckyNumber)
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

    suite.add('[declarative-js] Reducer.groupBy /key/ | ', function () {
        array.reduce(groupBy('luckyNumber'), Map())
    })
    suite.add('[declarative-js] Reducer.groupBy /function/ | ', function () {
        array.reduce(groupBy(x => x.luckyNumber), Map())
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
