const { performance } = require('perf_hooks');
const config = require('./config');

const functions = require('require-all')({
  dirname: `${__dirname}/functions`,
});

const {argv: [,, fnName, samples = 1] } = process;

const exec = functions[fnName];

if (!exec) {
  console.error(new Error(`The value introduced for the function to run (${fnName}) is incorrect or could not be found in the collection of functions.`));
}

const MISTERY_MESSAGE = config.misteryMessage;
const start = performance.now();
const result = exec(MISTERY_MESSAGE);
const end = performance.now();

console.log('result:', result);
console.log('performance:', end - start, 'ms', '-', (end - start) * 1000, 'μs');

