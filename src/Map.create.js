var Benchmark = require('benchmark');
var uuid = require('uuid')
var suite = new Benchmark.Suite;

let obj = {}
let map = new Map()

suite.add('Map.set', function () {
    for (let index = 0; index < 1000; index++) {
        map.set(index, index)
    }
})
suite.add('object[key] = key', function () {
    for (let index = 0; index < 1000; index++) {
        obj[index] = index
    }
})
suite.add('Object.defineProperty', function () {
    for (let index = 0; index < 1000; index++) {
        Object.defineProperty(obj, index, {
            value: index
        })
    }
})
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('\n');
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        console.log('Slowest is ' + this.filter('slowest').map('name'));
    })
    // run async
    .run({ 'async': true });
