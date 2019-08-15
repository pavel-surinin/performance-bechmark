## Reduer.groupBy

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "58b33091-c1d7-4c4f-b4a4-04e8a3789951",
  "luckyNumber": "30id"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.groupBy |  x 268 ops/sec ±0.89% (84 runs sampled) | ~ 4ms/op
2 | [snippet] reduce |  x 199 ops/sec ±0.70% (83 runs sampled) | ~ 5ms/op
3 | [lodash] _.groupBy |  x 150 ops/sec ±2.41% (70 runs sampled) | ~ 7ms/op
4 | [linq] groupBy |  x 105 ops/sec ±3.69% (67 runs sampled) | ~ 10ms/op
## Reducer.toObject

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "6eda8711-6406-4527-a6f8-02cb0e12f835",
  "luckyNumber": 84
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [snippet] for |  x 44.20 ops/sec ±3.35% (57 runs sampled) | ~ 23ms/op
2 | [**declarative-js**] Reducer.toObject  |  x 39.54 ops/sec ±3.38% (52 runs sampled) | ~ 25ms/op
3 | [**declarative-js**] Reducer.toMap |  x 38.98 ops/sec ±3.03% (52 runs sampled) | ~ 26ms/op
4 | [snippet] reduce |  x 38.43 ops/sec ±4.41% (52 runs sampled) | ~ 26ms/op
5 | [linq] toObject |  x 38.40 ops/sec ±3.32% (51 runs sampled) | ~ 26ms/op
6 | [lodash] _.keyBy |  x 36.77 ops/sec ±4.08% (49 runs sampled) | ~ 27ms/op
## toBe.unique (object content)

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": "54id",
  "index": 0,
  "random": "54id1",
  "a": "a",
  "b": "b",
  "c": "c"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 85.32 ops/sec ±0.92% (73 runs sampled) | ~ 12ms/op
2 | [**declarative-js**] toBe.unique |  x 84.01 ops/sec ±1.24% (72 runs sampled) | ~ 12ms/op
## toBe.unique

Benckmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"97id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 38.57 ops/sec ±0.47% (67 runs sampled) | ~ 26ms/op
2 | [lodash] _.uniq  |  x 36.28 ops/sec ±0.37% (63 runs sampled) | ~ 28ms/op
3 | [**declarative-js**] toBe.unique |  x 30.41 ops/sec ±0.89% (54 runs sampled) | ~ 33ms/op
4 | [linq] distinct  |  x 18.63 ops/sec ±4.65% (35 runs sampled) | ~ 54ms/op
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
1 | [**declarative-js**] toBe.uniqueBy |  x 41.21 ops/sec ±1.99% (55 runs sampled) | ~ 24ms/op
2 | [lodash] _.uniqBy  |  x 29.70 ops/sec ±1.65% (53 runs sampled) | ~ 34ms/op
