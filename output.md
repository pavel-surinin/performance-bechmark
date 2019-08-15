## Reduer.groupBy

Benckmark file name _./src/benchmarks/declarative.groupBy.js_

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "2595203f-1442-4c26-9a4c-ddb54d474d3f",
  "luckyNumber": "36id"
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] Reducer.groupBy |  x 210 ops/sec ±3.58% (71 runs sampled) | ~ 5ms/op
2 | [snippet] reduce |  x 197 ops/sec ±1.12% (83 runs sampled) | ~ 5ms/op
3 | [lodash] _.groupBy |  x 170 ops/sec ±2.54% (78 runs sampled) | ~ 6ms/op
4 | [linq] groupBy |  x 103 ops/sec ±1.96% (67 runs sampled) | ~ 10ms/op
## Reducer.toObject

Benckmark file name _./src/benchmarks/declarative.toObject.js_

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "c19c8298-118c-46e8-9b55-972ab3b2a8c9",
  "luckyNumber": 18
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [snippet] for |  x 40.75 ops/sec ±4.17% (54 runs sampled) | ~ 25ms/op
2 | [snippet] reduce |  x 37.31 ops/sec ±5.69% (50 runs sampled) | ~ 27ms/op
3 | [**declarative-js**] Reducer.toMap |  x 37.17 ops/sec ±4.04% (50 runs sampled) | ~ 27ms/op
4 | [linq] toObject |  x 36.50 ops/sec ±3.70% (49 runs sampled) | ~ 27ms/op
5 | [**declarative-js**] Reducer.toObject  |  x 35.42 ops/sec ±5.16% (49 runs sampled) | ~ 28ms/op
6 | [lodash] _.keyBy |  x 32.47 ops/sec ±7.74% (46 runs sampled) | ~ 31ms/op
## toBe.unique (object content)

Benckmark file name _./src/benchmarks/declarative.unique.deepObject.js_

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
1 | [native] new Set() |  x 88.05 ops/sec ±0.64% (75 runs sampled) | ~ 11ms/op
2 | [**declarative-js**] toBe.unique |  x 83.93 ops/sec ±0.84% (72 runs sampled) | ~ 12ms/op
## toBe.unique

Benckmark file name _./src/benchmarks/declarative.unique.js_

Test data with `1000000` instances

Instance example: 
```javascript
"28id"
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [native] new Set() |  x 36.03 ops/sec ±0.84% (63 runs sampled) | ~ 28ms/op
2 | [lodash] _.uniq  |  x 34.72 ops/sec ±0.76% (60 runs sampled) | ~ 29ms/op
3 | [**declarative-js**] toBe.unique |  x 29.87 ops/sec ±0.65% (53 runs sampled) | ~ 33ms/op
4 | [linq] distinct  |  x 19.36 ops/sec ±3.14% (37 runs sampled) | ~ 52ms/op
## toBe.uniqueBy

Benckmark file name _./src/benchmarks/declarative.uniqueBy.js_

Test data with `1000000` instances

Instance example: 
```javascript
{
  "index": 0
}
```

| Rank | Function | Result |  |
|---|---|---|---|
1 | [**declarative-js**] toBe.uniqueBy |  x 40.36 ops/sec ±2.28% (54 runs sampled) | ~ 25ms/op
2 | [lodash] _.uniqBy  |  x 28.81 ops/sec ±1.47% (51 runs sampled) | ~ 35ms/op
