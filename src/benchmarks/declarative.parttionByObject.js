var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var djs = require('declarative-js')
var _ = require('lodash')
var Reducer = djs.Reducer
var Logger = require('../_output').Logger


let benchmark = (filename) => {
    function createArray(length) {
        let names = [
            'Homer', 'Lisa', 'Marge', 'Bart', 'Ned', 'Todd', 'Abu', 'Burns', 'Smiters', 'Barney'
        ]
        let array = []
        for (let index = 0; index < length; index++) {
            let luckyNumber = Math.round(Math.random() * 10)
            array.push({ age: luckyNumber, name: names[luckyNumber], double: luckyNumber * 2 })
        }
        return array;
    }

    let n = 100000
    let array = createArray(n)
    let logger = new Logger(
        'Reducer.partitionBy[object]',
        n,
        array[0],
        filename,
        'Partitions array by object values  `{name: "Bart", age: 8}`'
    )

    suite.add('[declarative-js] Reducer.partitionBy | ', function () {
        array.reduce(Reducer.partitionBy('isEven'), [[], []])
    })
    suite.add('[lodash] _.partition| ', function () {
        _.partition(array, 'isEven')
    })
        .on('cycle', (e) => logger.addEvent(e))
        .on('complete', () => logger.writeResults())
        .run()
}

module.exports = {
    benchmark
}
