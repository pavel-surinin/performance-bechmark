
## Versions: 
 - node.js: _10.15.3_ 
 - declarative-js: _3.8.8_
 - lodash: _4.17.15_
 - linq: _3.2.0_
 - list: _2.0.19_
 - ramda: _0.26.1_

## Reducer.groupBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.groupBy.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "fe00f373-0895-4462-be15-20780449cbc1",
  "luckyNumber": "48id"
}
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [lodash] _.groupBy /function/ |  x 203 ops/sec ±3.21% (78 runs sampled) | ~ 5ms/op | 100 %
2 | [**declarative-js**] Reducer.groupBy /key/ |  x 203 ops/sec ±1.07% (84 runs sampled) | ~ 5ms/op | 100 %
3 | [**declarative-js**] Reducer.groupBy /function/ |  x 171 ops/sec ±2.91% (78 runs sampled) | ~ 6ms/op | 84 %
4 | [snippet] reduce |  x 164 ops/sec ±1.73% (81 runs sampled) | ~ 6ms/op | 81 %
5 | [lodash] _.groupBy /key/ |  x 160 ops/sec ±2.01% (80 runs sampled) | ~ 6ms/op | 79 %
6 | [ramda] groupBy |  x 123 ops/sec ±1.73% (77 runs sampled) | ~ 8ms/op | 60 %
7 | [linq] groupBy |  x 85.57 ops/sec ±3.38% (73 runs sampled) | ~ 12ms/op | 42 %
8 | [list] groupWith |  x 37.54 ops/sec ±3.34% (45 runs sampled) | ~ 27ms/op | 18 %
## Reducer.partitionBy[callback]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionBy.js)

Partitions array to be even or odd by callback function `x => x % 2 === 0`

Test data with `100000` instances

Instance example: 
```javascript
80
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [lodash] _.partition |  x 328 ops/sec ±1.10% (86 runs sampled) | ~ 3ms/op | 100 %
2 | [**declarative-js**] Reducer.partitionBy |  x 260 ops/sec ±1.88% (81 runs sampled) | ~ 4ms/op | 79 %
3 | [ramda] partition |  x 221 ops/sec ±0.82% (85 runs sampled) | ~ 5ms/op | 67 %
4 | [list] partition |  x 188 ops/sec ±2.77% (69 runs sampled) | ~ 5ms/op | 57 %
5 | [linq] partitionBy |  x 21.52 ops/sec ±4.44% (41 runs sampled) | ~ 46ms/op | 7 %
## Reducer.partitionBy[key]

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByKey.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.parttionByKey.js)

Partitions array to be separated by objects key `isEven`

Test data with `100000` instances

Instance example: 
```javascript
{
  "luckyNumber": 16,
  "isEven": true
}
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [**declarative-js**] Reducer.partitionBy |  x 290 ops/sec ±1.37% (85 runs sampled) | ~ 3ms/op | 100 %
2 | [lodash] _.partition|  x 133 ops/sec ±1.88% (75 runs sampled) | ~ 8ms/op | 46 %
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

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [**declarative-js**] Reducer.partitionBy |  x 127 ops/sec ±3.64% (71 runs sampled) | ~ 8ms/op | 100 %
2 | [lodash] _.partition|  x 108 ops/sec ±3.42% (69 runs sampled) | ~ 9ms/op | 85 %
## Sort.ascendingBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.sort.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": 17,
  "age": 35
}
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [**declarative-js**] Sort.ascendingBy /getter/ |  x 269 ops/sec ±4.42% (73 runs sampled) | ~ 4ms/op | 100 %
2 | [**declarative-js**] Sort.ascendingBy /key/ |  x 226 ops/sec ±2.96% (77 runs sampled) | ~ 4ms/op | 84 %
3 | [list] sortBy |  x 209 ops/sec ±2.96% (75 runs sampled) | ~ 5ms/op | 78 %
4 | [linq] orderBy  |  x 174 ops/sec ±2.59% (79 runs sampled) | ~ 6ms/op | 65 %
5 | [lodash] _.sortBy /getter/ |  x 163 ops/sec ±2.52% (74 runs sampled) | ~ 6ms/op | 61 %
6 | [lodash] _.sortBy  /key/ |  x 158 ops/sec ±2.99% (73 runs sampled) | ~ 6ms/op | 59 %
7 | [ramda] sortBy |  x 24.49 ops/sec ±3.16% (44 runs sampled) | ~ 41ms/op | 9 %
## Reducer.toObject

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.toObject.js)

Test data with `100000` instances

Instance example: 
```javascript
{
  "index": 0,
  "id": "6cbc9d97-6cf9-49d9-b453-b2fa2baa8128",
  "luckyNumber": 59
}
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [snippet] for |  x 32.22 ops/sec ±4.53% (45 runs sampled) | ~ 31ms/op | 100 %
2 | [snippet] reduce |  x 30.87 ops/sec ±4.78% (54 runs sampled) | ~ 32ms/op | 96 %
3 | [lodash] _.keyBy |  x 28.78 ops/sec ±4.97% (51 runs sampled) | ~ 35ms/op | 89 %
4 | [linq] toObject |  x 28.59 ops/sec ±4.84% (50 runs sampled) | ~ 35ms/op | 89 %
5 | [**declarative-js**] Reducer.toObject  |  x 28.32 ops/sec ±4.93% (50 runs sampled) | ~ 35ms/op | 88 %
6 | [**declarative-js**] Reducer.toMap |  x 27.85 ops/sec ±4.72% (49 runs sampled) | ~ 36ms/op | 86 %
## toBe.unique (object content)

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.deepObject.js)

Test data with `10000` instances

Instance example: 
```javascript
{
  "luckyNumber": "4id",
  "index": 0,
  "random": "4id1",
  "a": "a",
  "b": "b",
  "c": "c"
}
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [native] new Set() |  x 63.32 ops/sec ±1.87% (65 runs sampled) | ~ 16ms/op | 100 %
2 | [**declarative-js**] toBe.unique |  x 58.92 ops/sec ±2.61% (61 runs sampled) | ~ 17ms/op | 93 %
## toBe.unique

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.unique.js)

Test data with `1000000` instances

Instance example: 
```javascript
"33id"
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [native] new Set() |  x 20.58 ops/sec ±2.43% (38 runs sampled) | ~ 49ms/op | 100 %
2 | [lodash] _.uniq  |  x 20.22 ops/sec ±2.76% (37 runs sampled) | ~ 49ms/op | 98 %
3 | [array-uniq] |  x 20.21 ops/sec ±3.73% (38 runs sampled) | ~ 49ms/op | 98 %
4 | [**declarative-js**] toBe.unique |  x 18.36 ops/sec ±2.17% (44 runs sampled) | ~ 54ms/op | 89 %
5 | [linq] distinct  |  x 15.38 ops/sec ±2.23% (42 runs sampled) | ~ 65ms/op | 75 %
6 | [ramda] uniq |  x 3.87 ops/sec ±1.31% (14 runs sampled) | ~ 259ms/op | 19 %
## toBe.uniqueBy

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.uniqueBy.js)

Test data with `1000000` instances

Instance example: 
```javascript
{
  "index": 0
}
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [**declarative-js**] toBe.uniqueBy /key/ |  x 45.78 ops/sec ±2.78% (59 runs sampled) | ~ 22ms/op | 100 %
2 | [ramda] _.uniqBy  |  x 32.69 ops/sec ±2.41% (56 runs sampled) | ~ 31ms/op | 71 %
3 | [**declarative-js**] toBe.uniqueBy /function/ |  x 31.64 ops/sec ±1.39% (55 runs sampled) | ~ 32ms/op | 69 %
4 | [lodash] _.uniqBy |  x 22.47 ops/sec ±1.77% (41 runs sampled) | ~ 45ms/op | 49 %
## Reducer.zip

Benchmark file [_https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.zip.js_](https://github.com/pavel-surinin/performance-bechmark/tree/master/src/benchmarks/declarative.zip.js)

Zips array with shallow copy of origin array

Test data with `100000` instances

Instance example: 
```javascript
"39id"
```

| Rank | Function | Result |  |  | 
|---|---|---|---|---|
1 | [list] zip |  x 222 ops/sec ±3.55% (76 runs sampled) | ~ 5ms/op | 100 %
2 | [ramda] zip |  x 105 ops/sec ±13.17% (41 runs sampled) | ~ 9ms/op | 47 %
3 | [**declarative-js**] Reducer.zip |  x 89.60 ops/sec ±12.50% (44 runs sampled) | ~ 11ms/op | 40 %
4 | [lodash] _.zip  |  x 39.60 ops/sec ±13.59% (48 runs sampled) | ~ 25ms/op | 18 %
