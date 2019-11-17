
## Versions: 
 - node.js: _10.15.3_ 
 - declarative-js: _3.7.4_
 - lodash: _4.17.15_
 - linq: _3.2.0_

## Reducer.groupBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "20ab68db-5749-4397-bbff-024c071ee184",
  "luckyNumber": "7id"
}
```

| Rank | Function                             | Result                                   |           |
| ---- | ------------------------------------ | ---------------------------------------- | --------- |
| 1    | [**declarative-js**] Reducer.groupBy | x 199 ops/sec ±1.48% (80 runs sampled)   | ~ 5ms/op  |
| 2    | [snippet] reduce                     | x 142 ops/sec ±6.76% (72 runs sampled)   | ~ 7ms/op  |
| 3    | [lodash] _.groupBy                   | x 115 ops/sec ±6.10% (53 runs sampled)   | ~ 9ms/op  |
| 4    | [linq] groupBy                       | x 49.52 ops/sec ±4.56% (51 runs sampled) | ~ 20ms/op |
## Sort.ascendingBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 92,
  "age": 44
}
```

| Rank | Function                                       | Result                                 |          |
| ---- | ---------------------------------------------- | -------------------------------------- | -------- |
| 1    | [**declarative-js**] Sort.ascendingBy /getter/ | x 275 ops/sec ±4.74% (71 runs sampled) | ~ 4ms/op |
| 2    | [**declarative-js**] Sort.ascendingBy /key/    | x 229 ops/sec ±2.85% (72 runs sampled) | ~ 4ms/op |
| 3    | [linq] orderBy                                 | x 171 ops/sec ±2.35% (72 runs sampled) | ~ 6ms/op |
| 4    | [lodash] _.sortBy /getter/                     | x 156 ops/sec ±2.76% (73 runs sampled) | ~ 6ms/op |
| 5    | [lodash] _.sortBy  /key/                       | x 155 ops/sec ±3.12% (71 runs sampled) | ~ 6ms/op |
## Reducer.toObject

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "7fb5ca5a-3057-41b3-8862-13e40b4601c1",
  "luckyNumber": 32
}
```

| Rank | Function                              | Result                                   |           |
| ---- | ------------------------------------- | ---------------------------------------- | --------- |
| 1    | [snippet] for                         | x 27.52 ops/sec ±4.76% (49 runs sampled) | ~ 36ms/op |
| 2    | [snippet] reduce                      | x 26.13 ops/sec ±4.51% (47 runs sampled) | ~ 38ms/op |
| 3    | [linq] toObject                       | x 23.73 ops/sec ±4.73% (43 runs sampled) | ~ 42ms/op |
| 4    | [**declarative-js**] Reducer.toObject | x 23.60 ops/sec ±5.04% (43 runs sampled) | ~ 42ms/op |
| 5    | [lodash] _.keyBy                      | x 23.39 ops/sec ±4.96% (44 runs sampled) | ~ 43ms/op |
| 6    | [**declarative-js**] Reducer.toMap    | x 23.31 ops/sec ±4.85% (43 runs sampled) | ~ 43ms/op |
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

| Rank | Function                         | Result                                   |           |
| ---- | -------------------------------- | ---------------------------------------- | --------- |
| 1    | [native] new Set()               | x 68.35 ops/sec ±1.84% (70 runs sampled) | ~ 15ms/op |
| 2    | [**declarative-js**] toBe.unique | x 58.90 ops/sec ±2.03% (61 runs sampled) | ~ 17ms/op |
## toBe.unique

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"10id"
```

| Rank | Function                         | Result                                   |           |
| ---- | -------------------------------- | ---------------------------------------- | --------- |
| 1    | [native] new Set()               | x 32.99 ops/sec ±1.44% (57 runs sampled) | ~ 30ms/op |
| 2    | [lodash] _.uniq                  | x 31.92 ops/sec ±1.29% (55 runs sampled) | ~ 31ms/op |
| 3    | [**declarative-js**] toBe.unique | x 24.35 ops/sec ±1.53% (43 runs sampled) | ~ 41ms/op |
| 4    | [linq] distinct                  | x 16.28 ops/sec ±3.19% (44 runs sampled) | ~ 61ms/op |
## toBe.uniqueBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js)

Test data with `1000000` instances

Instance example: 
```javascript
{
  "index": 0
}
```

| Rank | Function                           | Result                                   |           |
| ---- | ---------------------------------- | ---------------------------------------- | --------- |
| 1    | [**declarative-js**] toBe.uniqueBy | x 32.65 ops/sec ±2.57% (57 runs sampled) | ~ 31ms/op |
| 2    | [lodash] _.uniqBy                  | x 23.01 ops/sec ±5.23% (42 runs sampled) | ~ 43ms/op |
