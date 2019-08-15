var Benchmark = require('benchmark');
var uuid = require('uuid')
var suite = new Benchmark.Suite;

let array = []
let array2 = []
let set = new Set()

suite.add('Set.add', function () {
    for (let i = 0; i < 1000; i++) {
        set.add(i + 'a');
    }
})
suite.add('Array.push', function () {
    for (let i = 0; i < 1000; i++) {
        array.push(i + 'a');
    }
})
suite.add('Array[key] = value', function () {
    for (let i = 0; i < 1000; i++) {
        array2[i] = i + 'a'
    }
})
suite.add('new Set(from array).has', function () {
    new Set(array).has(value)
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
