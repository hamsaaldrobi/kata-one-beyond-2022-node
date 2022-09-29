# The kata benchmarker

## Why

This repo is just a proof of concept of using [benchmark.js](https://benchmarkjs.com/) to measure the performance of different solutions to a same problem. We want to use it to create a kata challenge in our organization and let our program get the winner.

## How

To add a new solution, you just have to create a node file with your name inside the folder functions. That JS file should be like:

```javascript
module.exports = (misteryMessage) => {
  //...your code goes here...
}
```

## Standalone run
To run a test function created in a standalone way, you can use `index.js`:
```sh
node index.js [functionName]
```
i.e.
```sh
node index.js test-function-2022
```
With this command, you'll run the file `functions/test-function-2022.js`

## Benchmark.js run
To run the benchmarker, once all the solutions are added to the folder, just run:

```sh
node benchmark.js
```
With this command, you will run the benchmark for all the solutions inside the `functions` folder (one per file).

And you'll get stats and standings like:

```sh
@MacBoo ➜  benchmark  node index.js
betisman x 101,306 ops/sec ±0.51% (94 runs sampled)
cesar x 1,002,139 ops/sec ±2.42% (92 runs sampled)
matteo x 8,099 ops/sec ±0.50% (95 runs sampled)
Fastest is cesar
[
  { name: 'cesar', opsPerSecond: 1002139.327019037 },
  { name: 'betisman', opsPerSecond: 101306.48491351385 },
  { name: 'matteo', opsPerSecond: 8099.064104895205 }
]
┌─────────┬───────────────┬─────────────┬─────────────────────┬──────────────┬─────────────────┬─────────────────────┐
│ (index) │     name      │    mean     │ diffWithFastestMean │ opsPerSecond │ diffWithFastest │      result         │
├─────────┼───────────────┼─────────────┼─────────────────────┼──────────────┼─────────────────┼─────────────────────┤
│    0    │    'cesar'    │ '13.353 μs' │       '1.00x'       │ '74,887.845' │     '1.00x'     │ 'this is a message' │
│    1    │   'betisman'  │ '14.131 μs' │      '1.058x'       │ '70,765.865' │    '1.058x'     │ 'this is a message' │
│    2    │   'matteo'    │ '15.748 μs' │      '1.179x'       │ '63,499.611' │    '1.179x'     │ 'this is a message' │
└─────────┴───────────────┴─────────────┴─────────────────────┴──────────────┴─────────────────┴─────────────────────┘
```

## Traditional benchmark run
We have also implemented a traditional stopwatch benchmark just for fun and comparison, it can be run this way:
```sh
node traditional.js
```
With this command, you will run the benchmark for all the solutions inside the `functions` folder (one per file).

And you'll get stats and standings like:

```sh
@MacBoo ➜  benchmark  node index.js
testing betisman
testing cesar
testing matteo
Fastest is cesar
┌─────────┬───────────────┬────────────┬────────────┬─────────────────────────┬─────────┬─────────────────────┐
│ (index) │     name      │    mean    │   micro    │     diffWithFastest     │ samples │      result         │
├─────────┼───────────────┼────────────┼────────────┼─────────────────────────┼─────────┼─────────────────────┤
│    1    │  'betisman'   │ '0.002 ms' │ '2.019 μs' │ '11.185x - 1,018.485% ' │ 100000  │ 'this is a message' │
│    2    │    'matteo'   │ '0.002 ms' │ '2.028 μs' │ '11.235x - 1,023.474% ' │ 100000  │ 'this is a message' │
│    3    │    'cesar'    │ '0.002 ms' │ '2.091 μs' │ '11.585x - 1,058.514% ' │ 100000  │ 'this is a message' │
└─────────┴───────────────┴────────────┴────────────┴─────────────────────────┴─────────┴─────────────────────┘
```

## Take in mind

Don't forget to run 
```sh
nvm use
```
and 
```sh
npm install
```
before trying to run the scripts.


The mapping from Morse to alphanumerical is:
```
".-"    = 'a',
"-..."  = 'b',
"-.-."  = 'c',
"-.."   = 'd',
"."     = 'e',
"..-."  = 'f',
"--."   = 'g',
"...."  = 'h',
".."    = 'i',
".---"  = 'j',
"-.-"   = 'k',
".-.."  = 'l',
"--"    = 'm',
"-."    = 'n',
"---"   = 'o',
".--."  = 'p',
"--.-"  = 'q',
".-."   = 'r',
"..."   = 's',
"-"     = 't',
"..-"   = 'u',
"...-"  = 'v',
".--"   = 'w',
"-..-"  = 'x',
"-.--"  = 'y',
"--.."  = 'z',
".----" = '1',
"..---" = '2',
"...--" = '3',
"....-" = '4',
"....." = '5',
"-...." = '6',
"--..." = '7',
"---.." = '8',
"----." = '9',
"-----" = '0',
```
