var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

let array = []
let set = new Set()

for (let i = 0; i < 1000000; i++) {
    array.push(i);
    set.add(i);
}

let value = 999999

suite.add('Set.has', function () {
    set.has(value)
})
suite.add('Array.include', function () {
    array.includes(value)
})
suite.add('Array.indexOf', function () {
    array.indexOf(value) != -1
})
suite.add('Array.some', function () {
    array.some(x => x === value)
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
