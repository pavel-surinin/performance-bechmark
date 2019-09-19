
## Information

Versions: 

 - node.js: _10.15.3_ 
 - declarative-js: _3.7.3_
 - lodash: _4.17.15_
 - linq: _3.2.0_

## Reduer.groupBy

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "b8b14f61-82c5-4006-9989-2d78aaebc167",
  "luckyNumber": "85id"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [lodash] _.groupBy |  x 119 ops/sec ±5.37% (65 runs sampled) | ~ 8ms/op
2 | [**declarative-js**] Reducer.groupBy |  x 93.57 ops/sec ±4.29% (65 runs sampled) | ~ 11ms/op
3 | [snippet] reduce |  x 86.60 ops/sec ±1.60% (68 runs sampled) | ~ 12ms/op
4 | [linq] groupBy |  x 41.90 ops/sec ±4.26% (53 runs sampled) | ~ 24ms/op
## Sort.ascendingBy

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 65,
  "age": 17
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Sort.ascendingBy /getter/ |  x 132 ops/sec ±4.98% (56 runs sampled) | ~ 8ms/op
2 | [**declarative-js**] Sort.ascendingBy /key/ |  x 113 ops/sec ±3.39% (63 runs sampled) | ~ 9ms/op
3 | [linq] orderBy  |  x 88.58 ops/sec ±3.49% (62 runs sampled) | ~ 11ms/op
4 | [lodash] _.sortBy /getter/ |  x 80.27 ops/sec ±2.96% (65 runs sampled) | ~ 12ms/op
5 | [lodash] _.sortBy  /key/ |  x 77.78 ops/sec ±4.40% (64 runs sampled) | ~ 13ms/op
## Reducer.toObject

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "a4cc22e1-60be-4808-bc78-9a1b71b238f0",
  "luckyNumber": 86
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [snippet] for |  x 17.88 ops/sec ±6.68% (33 runs sampled) | ~ 56ms/op
2 | [**declarative-js**] Reducer.toMap |  x 16.73 ops/sec ±5.52% (32 runs sampled) | ~ 60ms/op
3 | [linq] toObject |  x 16.15 ops/sec ±5.45% (32 runs sampled) | ~ 62ms/op
4 | [snippet] reduce |  x 16.08 ops/sec ±6.80% (30 runs sampled) | ~ 62ms/op
5 | [**declarative-js**] Reducer.toObject  |  x 15.82 ops/sec ±5.74% (42 runs sampled) | ~ 63ms/op
6 | [lodash] _.keyBy |  x 14.56 ops/sec ±7.25% (30 runs sampled) | ~ 69ms/op
## toBe.unique (object content)

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

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

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 34.46 ops/sec ±1.47% (58 runs sampled) | ~ 29ms/op
2 | [**declarative-js**] toBe.unique |  x 29.36 ops/sec ±5.14% (50 runs sampled) | ~ 34ms/op
## toBe.unique

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"17id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 15.68 ops/sec ±1.18% (42 runs sampled) | ~ 64ms/op
2 | [lodash] _.uniq  |  x 14.76 ops/sec ±1.40% (40 runs sampled) | ~ 68ms/op
3 | [**declarative-js**] toBe.unique |  x 11.07 ops/sec ±3.63% (31 runs sampled) | ~ 90ms/op
4 | [linq] distinct  |  x 8.08 ops/sec ±3.22% (24 runs sampled) | ~ 124ms/op
## toBe.uniqueBy

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js)

Test data with `1000000` instances

Instance example: 
```javascript
{
  "index": 0
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] toBe.uniqueBy |  x 17.31 ops/sec ±3.46% (43 runs sampled) | ~ 58ms/op
2 | [lodash] _.uniqBy  |  x 10.90 ops/sec ±6.17% (31 runs sampled) | ~ 92ms/op
