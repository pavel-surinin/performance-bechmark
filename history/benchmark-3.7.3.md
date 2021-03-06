
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
  "id": "b8b14f61-82c5-4006-9989-2d78aaebc167",
  "luckyNumber": "85id"
}
```

| Rank | Function                             | Result                                   |           |
| ---- | ------------------------------------ | ---------------------------------------- | --------- |
| 1    | [lodash] _.groupBy                   | x 119 ops/sec ±5.37% (65 runs sampled)   | ~ 8ms/op  |
| 2    | [**declarative-js**] Reducer.groupBy | x 93.57 ops/sec ±4.29% (65 runs sampled) | ~ 11ms/op |
| 3    | [snippet] reduce                     | x 86.60 ops/sec ±1.60% (68 runs sampled) | ~ 12ms/op |
| 4    | [linq] groupBy                       | x 41.90 ops/sec ±4.26% (53 runs sampled) | ~ 24ms/op |
## Sort.ascendingBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 65,
  "age": 17
}
```

| Rank | Function                                       | Result                                   |           |
| ---- | ---------------------------------------------- | ---------------------------------------- | --------- |
| 1    | [**declarative-js**] Sort.ascendingBy /getter/ | x 132 ops/sec ±4.98% (56 runs sampled)   | ~ 8ms/op  |
| 2    | [**declarative-js**] Sort.ascendingBy /key/    | x 113 ops/sec ±3.39% (63 runs sampled)   | ~ 9ms/op  |
| 3    | [linq] orderBy                                 | x 88.58 ops/sec ±3.49% (62 runs sampled) | ~ 11ms/op |
| 4    | [lodash] _.sortBy /getter/                     | x 80.27 ops/sec ±2.96% (65 runs sampled) | ~ 12ms/op |
| 5    | [lodash] _.sortBy  /key/                       | x 77.78 ops/sec ±4.40% (64 runs sampled) | ~ 13ms/op |
## Reducer.toObject

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "a4cc22e1-60be-4808-bc78-9a1b71b238f0",
  "luckyNumber": 86
}
```

| Rank | Function                              | Result                                   |           |
| ---- | ------------------------------------- | ---------------------------------------- | --------- |
| 1    | [snippet] for                         | x 17.88 ops/sec ±6.68% (33 runs sampled) | ~ 56ms/op |
| 2    | [**declarative-js**] Reducer.toMap    | x 16.73 ops/sec ±5.52% (32 runs sampled) | ~ 60ms/op |
| 3    | [linq] toObject                       | x 16.15 ops/sec ±5.45% (32 runs sampled) | ~ 62ms/op |
| 4    | [snippet] reduce                      | x 16.08 ops/sec ±6.80% (30 runs sampled) | ~ 62ms/op |
| 5    | [**declarative-js**] Reducer.toObject | x 15.82 ops/sec ±5.74% (42 runs sampled) | ~ 63ms/op |
| 6    | [lodash] _.keyBy                      | x 14.56 ops/sec ±7.25% (30 runs sampled) | ~ 69ms/op |
## toBe.unique (object content)

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": "21id",
  "index": 0,
  "random": "21id1",
  "a": "a",
  "b": "b",
  "c": "c"
}
```

| Rank | Function                         | Result                                   |           |
| ---- | -------------------------------- | ---------------------------------------- | --------- |
| 1    | [native] new Set()               | x 34.46 ops/sec ±1.47% (58 runs sampled) | ~ 29ms/op |
| 2    | [**declarative-js**] toBe.unique | x 29.36 ops/sec ±5.14% (50 runs sampled) | ~ 34ms/op |
## toBe.unique

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"17id"
```

| Rank | Function                         | Result                                   |            |
| ---- | -------------------------------- | ---------------------------------------- | ---------- |
| 1    | [native] new Set()               | x 15.68 ops/sec ±1.18% (42 runs sampled) | ~ 64ms/op  |
| 2    | [lodash] _.uniq                  | x 14.76 ops/sec ±1.40% (40 runs sampled) | ~ 68ms/op  |
| 3    | [**declarative-js**] toBe.unique | x 11.07 ops/sec ±3.63% (31 runs sampled) | ~ 90ms/op  |
| 4    | [linq] distinct                  | x 8.08 ops/sec ±3.22% (24 runs sampled)  | ~ 124ms/op |
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
| 1    | [**declarative-js**] toBe.uniqueBy | x 17.31 ops/sec ±3.46% (43 runs sampled) | ~ 58ms/op |
| 2    | [lodash] _.uniqBy                  | x 10.90 ops/sec ±6.17% (31 runs sampled) | ~ 92ms/op |

```

| Rank | Function                             | Result                                   |           |
| ---- | ------------------------------------ | ---------------------------------------- | --------- |
| 1    | [**declarative-js**] Reducer.groupBy | x 189 ops/sec ±3.79% (78 runs sampled)   | ~ 5ms/op  |
| 2    | [snippet] reduce                     | x 167 ops/sec ±1.63% (78 runs sampled)   | ~ 6ms/op  |
| 3    | [lodash] _.groupBy                   | x 165 ops/sec ±1.18% (82 runs sampled)   | ~ 6ms/op  |
| 4    | [linq] groupBy                       | x 80.50 ops/sec ±3.44% (61 runs sampled) | ~ 12ms/op |
## Sort.ascendingBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 2,
  "age": 61
}
```

| Rank | Function                                       | Result                                 |          |
| ---- | ---------------------------------------------- | -------------------------------------- | -------- |
| 1    | [**declarative-js**] Sort.ascendingBy /getter/ | x 285 ops/sec ±3.96% (73 runs sampled) | ~ 4ms/op |
| 2    | [**declarative-js**] Sort.ascendingBy /key/    | x 235 ops/sec ±3.35% (74 runs sampled) | ~ 4ms/op |
| 3    | [linq] orderBy                                 | x 182 ops/sec ±2.20% (76 runs sampled) | ~ 5ms/op |
| 4    | [lodash] _.sortBy /getter/                     | x 162 ops/sec ±3.34% (75 runs sampled) | ~ 6ms/op |
| 5    | [lodash] _.sortBy  /key/                       | x 157 ops/sec ±2.89% (72 runs sampled) | ~ 6ms/op |
## Reducer.toObject

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "bd0fe364-7e57-425d-97cd-da469e323c13",
  "luckyNumber": 18
}
```

| Rank | Function                              | Result                                   |           |
| ---- | ------------------------------------- | ---------------------------------------- | --------- |
| 1    | [snippet] for                         | x 26.30 ops/sec ±4.73% (48 runs sampled) | ~ 38ms/op |
| 2    | [snippet] reduce                      | x 25.12 ops/sec ±4.79% (46 runs sampled) | ~ 40ms/op |
| 3    | [**declarative-js**] Reducer.toMap    | x 23.25 ops/sec ±4.78% (43 runs sampled) | ~ 43ms/op |
| 4    | [**declarative-js**] Reducer.toObject | x 23.01 ops/sec ±4.93% (42 runs sampled) | ~ 43ms/op |
| 5    | [lodash] _.keyBy                      | x 22.98 ops/sec ±4.98% (43 runs sampled) | ~ 44ms/op |
| 6    | [linq] toObject                       | x 20.63 ops/sec ±5.94% (39 runs sampled) | ~ 48ms/op |
## toBe.unique (object content)

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": "61id",
  "index": 0,
  "random": "61id1",
  "a": "a",
  "b": "b",
  "c": "c"
}
```

| Rank | Function                         | Result                                   |           |
| ---- | -------------------------------- | ---------------------------------------- | --------- |
| 1    | [native] new Set()               | x 36.50 ops/sec ±3.16% (47 runs sampled) | ~ 27ms/op |
| 2    | [**declarative-js**] toBe.unique | x 36.18 ops/sec ±4.12% (48 runs sampled) | ~ 28ms/op |
## toBe.unique

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"86id"
```

| Rank | Function                         | Result                                   |            |
| ---- | -------------------------------- | ---------------------------------------- | ---------- |
| 1    | [native] new Set()               | x 20.57 ops/sec ±3.94% (38 runs sampled) | ~ 49ms/op  |
| 2    | [lodash] _.uniq                  | x 17.21 ops/sec ±4.61% (32 runs sampled) | ~ 58ms/op  |
| 3    | [**declarative-js**] toBe.unique | x 13.05 ops/sec ±2.68% (36 runs sampled) | ~ 77ms/op  |
| 4    | [linq] distinct                  | x 7.78 ops/sec ±5.87% (24 runs sampled)  | ~ 128ms/op |
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
| 1    | [lodash] _.uniqBy                  | x 21.72 ops/sec ±8.65% (42 runs sampled) | ~ 46ms/op |
| 2    | [**declarative-js**] toBe.uniqueBy | x 18.83 ops/sec ±5.37% (34 runs sampled) | ~ 53ms/op |
