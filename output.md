
## Versions: 
 - node.js: _10.15.3_ 
 - declarative-js: _3.8.6_
 - lodash: _4.17.15_
 - linq: _3.2.0_

## Reducer.groupBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "3b5e2bea-f235-4430-8c53-c68c6ea35f58",
  "luckyNumber": "1id"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.groupBy |  x 253 ops/sec ±0.65% (84 runs sampled) | ~ 4ms/op
2 | [snippet] reduce |  x 213 ops/sec ±0.34% (83 runs sampled) | ~ 5ms/op
3 | [lodash] _.groupBy |  x 178 ops/sec ±2.37% (77 runs sampled) | ~ 6ms/op
4 | [linq] groupBy |  x 115 ops/sec ±1.88% (74 runs sampled) | ~ 9ms/op
## Reducer.partitionBy[callback]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionBy.js)

Partitions array to be even or odd by callback function `x => x % 2 === 0`

Test data with `100000` instances

Instance example: 
```javascript
46
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [lodash] _.partition|  x 408 ops/sec ±0.39% (89 runs sampled) | ~ 2ms/op
2 | [**declarative-js**] Reducer.partitionBy |  x 342 ops/sec ±0.45% (90 runs sampled) | ~ 3ms/op
3 | [linq] partitionBy  |  x 35.11 ops/sec ±3.01% (48 runs sampled) | ~ 28ms/op
## Reducer.partitionBy[key]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByKey.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByKey.js)

Partitions array to be separated by objects key `isEven`

Test data with `100000` instances

Instance example: 
```javascript
{
  "luckyNumber": 49,
  "isEven": false
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.partitionBy |  x 365 ops/sec ±1.40% (88 runs sampled) | ~ 3ms/op
2 | [lodash] _.partition|  x 163 ops/sec ±0.44% (83 runs sampled) | ~ 6ms/op
## Reducer.partitionBy[object]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByObject.js)

Partitions array by object values  `{name: "Bart", age: 8}`

Test data with `100000` instances

Instance example: 
```javascript
{
  "age": 9,
  "name": "Barney",
  "double": 18
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.partitionBy |  x 167 ops/sec ±2.86% (77 runs sampled) | ~ 6ms/op
2 | [lodash] _.partition|  x 136 ops/sec ±2.21% (77 runs sampled) | ~ 7ms/op
## Sort.ascendingBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 82,
  "age": 77
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Sort.ascendingBy /getter/ |  x 368 ops/sec ±3.22% (81 runs sampled) | ~ 3ms/op
2 | [**declarative-js**] Sort.ascendingBy /key/ |  x 313 ops/sec ±1.20% (87 runs sampled) | ~ 3ms/op
3 | [linq] orderBy  |  x 236 ops/sec ±1.15% (85 runs sampled) | ~ 4ms/op
4 | [lodash] _.sortBy /getter/ |  x 215 ops/sec ±1.64% (84 runs sampled) | ~ 5ms/op
5 | [lodash] _.sortBy  /key/ |  x 211 ops/sec ±1.75% (82 runs sampled) | ~ 5ms/op
## Reducer.toObject

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "b09d7b4b-60e1-4ab0-97a6-d1b41ab6f93c",
  "luckyNumber": 14
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [snippet] for |  x 41.81 ops/sec ±3.62% (55 runs sampled) | ~ 24ms/op
2 | [snippet] reduce |  x 40.06 ops/sec ±3.63% (53 runs sampled) | ~ 25ms/op
3 | [**declarative-js**] Reducer.toMap |  x 37.65 ops/sec ±3.53% (50 runs sampled) | ~ 27ms/op
4 | [**declarative-js**] Reducer.toObject  |  x 37.59 ops/sec ±3.24% (50 runs sampled) | ~ 27ms/op
5 | [lodash] _.keyBy |  x 37.25 ops/sec ±3.37% (50 runs sampled) | ~ 27ms/op
6 | [linq] toObject |  x 36.88 ops/sec ±3.47% (49 runs sampled) | ~ 27ms/op
## toBe.unique (object content)

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": "15id",
  "index": 0,
  "random": "15id1",
  "a": "a",
  "b": "b",
  "c": "c"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 81.10 ops/sec ±1.27% (70 runs sampled) | ~ 12ms/op
2 | [**declarative-js**] toBe.unique |  x 79.99 ops/sec ±0.58% (69 runs sampled) | ~ 13ms/op
## toBe.unique

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"83id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [lodash] _.uniq  |  x 28.83 ops/sec ±1.03% (51 runs sampled) | ~ 35ms/op
2 | [native] new Set() |  x 28.12 ops/sec ±1.01% (50 runs sampled) | ~ 36ms/op
3 | [array-uniq] |  x 27.54 ops/sec ±2.82% (50 runs sampled) | ~ 36ms/op
4 | [**declarative-js**] toBe.unique |  x 25.01 ops/sec ±0.32% (45 runs sampled) | ~ 40ms/op
5 | [linq] distinct  |  x 18.30 ops/sec ±4.00% (37 runs sampled) | ~ 55ms/op
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
1 | [**declarative-js**] toBe.uniqueBy |  x 40.51 ops/sec ±3.29% (53 runs sampled) | ~ 25ms/op
2 | [lodash] _.uniqBy  |  x 31.56 ops/sec ±0.71% (56 runs sampled) | ~ 32ms/op
## Reducer.zip

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.zip.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.zip.js)

Zips array with shallow copy of origin array

Test data with `100000` instances

Instance example: 
```javascript
"29id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.zip |  x 117 ops/sec ±9.54% (51 runs sampled) | ~ 9ms/op
2 | [lodash] _.zip  |  x 55.80 ops/sec ±11.85% (49 runs sampled) | ~ 18ms/op
3 | [linq] zip  | :  | ~ Infinityms/op
