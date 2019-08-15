var Benchmark = require('benchmark');
var uuid = require('uuid')
var suite = new Benchmark.Suite;

let obj = {}
let map = new Map()

console.log('Creating object and map with 1 000 000 entries...');

for (let index = 0; index < 1000000; index++) {
    var id = uuid();
    obj[id] = index;
    map.set(id, index);
}

let key = Object.keys(obj)[555555]
let temp
console.log('Created');

suite.add('Map.has', function () {
    temp = map.has(key);
})
suite.add('object[key] != null', function () {
    temp = obj[key] != undefined
})
suite.add('object.hasOwnProperty', function () {
    temp = obj.hasOwnProperty(key)
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
