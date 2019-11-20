
## Versions: 
 - node.js: _10.15.3_ 
 - declarative-js: _3.8.8_
 - lodash: _4.17.15_
 - linq: _3.2.0_

## Reducer.groupBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "0375d7f9-e307-46e8-9b09-e165d2f60472",
  "luckyNumber": "21id"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.groupBy |  x 237 ops/sec ±0.66% (85 runs sampled) | ~ 4ms/op
2 | [lodash] _.groupBy |  x 194 ops/sec ±0.94% (81 runs sampled) | ~ 5ms/op
3 | [snippet] reduce |  x 193 ops/sec ±0.62% (86 runs sampled) | ~ 5ms/op
4 | [linq] groupBy |  x 107 ops/sec ±1.99% (71 runs sampled) | ~ 9ms/op
## Reducer.partitionBy[callback]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionBy.js)

Partitions array to be even or odd by callback function `x => x % 2 === 0`

Test data with `100000` instances

Instance example: 
```javascript
47
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [lodash] _.partition|  x 405 ops/sec ±0.48% (88 runs sampled) | ~ 2ms/op
2 | [**declarative-js**] Reducer.partitionBy |  x 312 ops/sec ±2.68% (82 runs sampled) | ~ 3ms/op
3 | [linq] partitionBy  |  x 33.53 ops/sec ±2.85% (46 runs sampled) | ~ 30ms/op
## Reducer.partitionBy[key]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByKey.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByKey.js)

Partitions array to be separated by objects key `isEven`

Test data with `100000` instances

Instance example: 
```javascript
{
  "luckyNumber": 100,
  "isEven": true
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.partitionBy |  x 349 ops/sec ±0.66% (87 runs sampled) | ~ 3ms/op
2 | [lodash] _.partition|  x 157 ops/sec ±0.51% (80 runs sampled) | ~ 6ms/op
## Reducer.partitionBy[object]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByObject.js)

Partitions array by object values  `{name: "Bart", age: 8}`

Test data with `100000` instances

Instance example: 
```javascript
{
  "age": 0,
  "name": "Homer",
  "double": 0
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.partitionBy |  x 166 ops/sec ±2.24% (76 runs sampled) | ~ 6ms/op
2 | [lodash] _.partition|  x 135 ops/sec ±2.46% (76 runs sampled) | ~ 7ms/op
## Sort.ascendingBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 57,
  "age": 91
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Sort.ascendingBy /getter/ |  x 357 ops/sec ±3.43% (81 runs sampled) | ~ 3ms/op
2 | [**declarative-js**] Sort.ascendingBy /key/ |  x 293 ops/sec ±2.17% (82 runs sampled) | ~ 3ms/op
3 | [linq] orderBy  |  x 230 ops/sec ±1.62% (84 runs sampled) | ~ 4ms/op
4 | [lodash] _.sortBy  /key/ |  x 200 ops/sec ±2.96% (78 runs sampled) | ~ 5ms/op
5 | [lodash] _.sortBy /getter/ |  x 199 ops/sec ±4.23% (75 runs sampled) | ~ 5ms/op
## Reducer.toObject

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "a960655f-16fd-44fa-83d0-4eded806a1d7",
  "luckyNumber": 33
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [snippet] for |  x 39.76 ops/sec ±3.24% (53 runs sampled) | ~ 25ms/op
2 | [snippet] reduce |  x 38.29 ops/sec ±3.51% (51 runs sampled) | ~ 26ms/op
3 | [**declarative-js**] Reducer.toMap |  x 35.45 ops/sec ±3.43% (48 runs sampled) | ~ 28ms/op
4 | [**declarative-js**] Reducer.toObject  |  x 35.43 ops/sec ±3.54% (48 runs sampled) | ~ 28ms/op
5 | [linq] toObject |  x 35.35 ops/sec ±3.63% (48 runs sampled) | ~ 28ms/op
6 | [lodash] _.keyBy |  x 35.00 ops/sec ±4.19% (47 runs sampled) | ~ 29ms/op
## toBe.unique (object content)

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": "28id",
  "index": 0,
  "random": "28id1",
  "a": "a",
  "b": "b",
  "c": "c"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 80.83 ops/sec ±0.94% (69 runs sampled) | ~ 12ms/op
2 | [**declarative-js**] toBe.unique |  x 77.05 ops/sec ±0.96% (66 runs sampled) | ~ 13ms/op
## toBe.unique

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"5id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [array-uniq] |  x 26.11 ops/sec ±1.71% (47 runs sampled) | ~ 38ms/op
2 | [native] new Set() |  x 25.65 ops/sec ±2.44% (46 runs sampled) | ~ 39ms/op
3 | [lodash] _.uniq  |  x 25.43 ops/sec ±2.75% (46 runs sampled) | ~ 39ms/op
4 | [**declarative-js**] toBe.unique |  x 22.95 ops/sec ±0.98% (42 runs sampled) | ~ 44ms/op
5 | [linq] distinct  |  x 18.17 ops/sec ±2.45% (49 runs sampled) | ~ 55ms/op
## toBe.uniqueBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js)

Test data with `1000000` instances

Instance example: 
```javascript
{
  "index": 0
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] toBe.uniqueBy |  x 43.28 ops/sec ±2.06% (57 runs sampled) | ~ 23ms/op
2 | [lodash] _.uniqBy  |  x 27.40 ops/sec ±2.36% (49 runs sampled) | ~ 37ms/op
## Reducer.zip

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.zip.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.zip.js)

Zips array with shallow copy of origin array

Test data with `100000` instances

Instance example: 
```javascript
"49id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.zip |  x 110 ops/sec ±9.91% (50 runs sampled) | ~ 9ms/op
2 | [lodash] _.zip  |  x 46.64 ops/sec ±13.63% (49 runs sampled) | ~ 21ms/op
