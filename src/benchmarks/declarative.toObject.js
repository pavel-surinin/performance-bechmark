var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var uuid = require('uuid')
var _ = require('lodash')
var toObject = djs.Reducer.toObject
var toMap = djs.Reducer.toMap
var Map = djs.Reducer.Map
var linq = require('linq')
var Logger = require('../_output').Logger
let n = 100000


let benchmark = (filename) => {
    let array = []
    for (let index = 0; index < n; index++) {
        let id = uuid()
        let luckyNumber = Math.round(Math.random() * 100)
        array.push({ index, id, luckyNumber })
    }
    let logger = new Logger('Reducer.toObject', n, array[0], filename)
    suite.add('[lodash] _.keyBy | ', function () {
        _.keyBy(array, 'id')
    })
    suite.add('[snippet] reduce | ', function () {
        array.reduce((obj, item) => {
            obj[item.id] = item
            return obj
        }, {})
    })
    suite.add('[snippet] for | ', function () {
        var result = {};
        for (var i = 0; i < array.length; i++) {
            result[array[i].id] = array[i];
        }
    })
    suite.add('[declarative-js] Reducer.toObject  | ', function () {
        array.reduce(toObject(x => x.id), {})
    })
    suite.add('[declarative-js] Reducer.toMap | ', function () {
        array.reduce(toMap(x => x.id), Map()).toObject()
    })
    suite.add('[linq] toObject | ', function () {
        linq.from(array).toObject(x => x.id)
    })
        .on('cycle', function (event) {
            logger.addEvent(event)
        })
        .on('complete', function () {
            logger.writeResults()
        })
        .run()
}


module.exports = {
    benchmark
}
