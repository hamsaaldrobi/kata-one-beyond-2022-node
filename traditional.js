
const Benchmark = require('benchmark');
const { performance } = require('perf_hooks');
const config = require('./config');

const { minSamples, minimumFractionDigits, misteryMessage: MISTERY_MESSAGE } = config;

const functions = require('require-all')({
  dirname: `${__dirname}/functions`,
});

const getMean = array => array.reduce((acc, el) => acc + el, 0) / array.length;
const millisToMicrosecs = millis => (millis * 1000);

let results = {};
Object.entries(functions).map(([functionName, fn]) => {
  console.log('testing', functionName);
  const samples = [];
  let result;
  for (let i = 0; i < minSamples*500; i++) {
    const start = performance.now();
    result = fn(MISTERY_MESSAGE);
    const end = performance.now();
    samples.push(end-start);
  }
  const mean = getMean(samples);
  results = {
    ...results,
    [functionName]: { 
      mean,
      result,
      samples: samples.length,
    },
  };
});

const printStandings = res => {
  const resModified = Object.entries(res).map(([k, v]) => ({ ...v, name: k }));
  const sorted = resModified.sort((a, b) => a.mean - b.mean);
  const formatSorted = sorted.map(el => ({
    name: el.name,
    mean: `${el.mean.toLocaleString('en-US', { minimumFractionDigits })
  } ms`,
    // `${secsToMicrosecs(stats.mean).toLocaleString('en-US', { minimumFractionDigits })} μs`
    micro: `${millisToMicrosecs(el.mean).toLocaleString('en-US', { minimumFractionDigits })} μs`,
    diffWithFastest: `${(el.mean / sorted[0].mean).toLocaleString('en-US', { minimumFractionDigits })}x - ${((el.mean - sorted[0].mean) * 100 / sorted[0].mean).toLocaleString('en-US', { minimumFractionDigits })}% `,
    result: el.result,
    samples: el.samples,
  }));
  console.table(formatSorted, ['name', 'mean', 'micro', 'diffWithFastest', 'samples', 'result']);
};

// console.log('results:', results);
printStandings(results);
