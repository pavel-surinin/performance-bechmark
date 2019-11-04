
## Versions: 
 - node.js: _10.15.3_ 
 - declarative-js: _3.8.5_
 - lodash: _4.17.15_
 - linq: _3.2.0_

## Reduer.groupBy

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "9bfff3fa-e924-4eb4-b8fb-13a1933529e5",
  "luckyNumber": "48id"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [lodash] _.groupBy |  x 145 ops/sec ±2.76% (73 runs sampled) | ~ 7ms/op
2 | [snippet] reduce |  x 138 ops/sec ±3.17% (69 runs sampled) | ~ 7ms/op
3 | [**declarative-js**] Reducer.groupBy |  x 135 ops/sec ±5.04% (62 runs sampled) | ~ 7ms/op
4 | [linq] groupBy |  x 79.13 ops/sec ±2.42% (67 runs sampled) | ~ 13ms/op
## Sort.ascendingBy

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 20,
  "age": 53
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Sort.ascendingBy /getter/ |  x 144 ops/sec ±5.18% (57 runs sampled) | ~ 7ms/op
2 | [**declarative-js**] Sort.ascendingBy /key/ |  x 127 ops/sec ±3.24% (59 runs sampled) | ~ 8ms/op
3 | [linq] orderBy  |  x 96.14 ops/sec ±3.82% (60 runs sampled) | ~ 10ms/op
4 | [lodash] _.sortBy  /key/ |  x 87.47 ops/sec ±3.39% (59 runs sampled) | ~ 11ms/op
5 | [lodash] _.sortBy /getter/ |  x 86.85 ops/sec ±5.01% (55 runs sampled) | ~ 12ms/op
## Reducer.toObject

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "e9dc134d-c620-4884-8496-e8d2fd36d20e",
  "luckyNumber": 61
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [snippet] for |  x 19.76 ops/sec ±6.93% (37 runs sampled) | ~ 51ms/op
2 | [snippet] reduce |  x 19.02 ops/sec ±5.43% (35 runs sampled) | ~ 53ms/op
3 | [**declarative-js**] Reducer.toMap |  x 18.65 ops/sec ±5.45% (33 runs sampled) | ~ 54ms/op
4 | [linq] toObject |  x 17.88 ops/sec ±4.99% (33 runs sampled) | ~ 56ms/op
5 | [**declarative-js**] Reducer.toObject  |  x 17.84 ops/sec ±4.87% (33 runs sampled) | ~ 56ms/op
6 | [lodash] _.keyBy |  x 16.86 ops/sec ±7.15% (33 runs sampled) | ~ 59ms/op
## toBe.unique (object content)

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": "6id",
  "index": 0,
  "random": "6id1",
  "a": "a",
  "b": "b",
  "c": "c"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 35.05 ops/sec ±1.56% (59 runs sampled) | ~ 29ms/op
2 | [**declarative-js**] toBe.unique |  x 33.65 ops/sec ±3.70% (47 runs sampled) | ~ 30ms/op
## toBe.unique

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"62id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [lodash] _.uniq  |  x 10.93 ops/sec ±3.95% (30 runs sampled) | ~ 91ms/op
2 | [native] new Set() |  x 10.84 ops/sec ±4.77% (31 runs sampled) | ~ 92ms/op
3 | [array-uniq] |  x 10.59 ops/sec ±4.28% (30 runs sampled) | ~ 94ms/op
4 | [**declarative-js**] toBe.unique |  x 10.41 ops/sec ±3.00% (29 runs sampled) | ~ 96ms/op
5 | [linq] distinct  |  x 8.39 ops/sec ±3.07% (25 runs sampled) | ~ 119ms/op
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
1 | [**declarative-js**] toBe.uniqueBy |  x 17.69 ops/sec ±9.03% (35 runs sampled) | ~ 57ms/op
2 | [lodash] _.uniqBy  |  x 13.01 ops/sec ±3.69% (33 runs sampled) | ~ 77ms/op
