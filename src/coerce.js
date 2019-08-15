var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite.add('undefined', function () {
    let a = !!undefined ? 1 : 2
})
suite.add('undefined', function () {
    let a = undefined ? 1 : 2
})
suite.add('false', function () {
    let a = false ? 1 : 2
})
suite.add('0', function () {
    let a = 0 ? 1 : 2
})
suite.add('""', function () {
    let a = "" ? 1 : 2
})
suite.add('Boolean 0', function () {
    let a = Boolean(0) ? 1 : 2
})
suite.add('Boolean ""', function () {
    let a = Boolean("") ? 1 : 2
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
