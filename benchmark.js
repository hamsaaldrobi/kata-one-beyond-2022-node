
const Benchmark = require('benchmark');
const config = require('./config');

const { minSamples, minimumFractionDigits, misteryMessage: MISTERY_MESSAGE  } = config;

const suite = new Benchmark.Suite;

const functions = require('require-all')({
  dirname: `${__dirname}/functions`,
});

const compare = (a, b) => b.hz - a.hz;

const onError = err => console.error(err.message);

const addAll = s => Object.entries(functions).reduce((agg, [k, v]) => agg.add(k, () => v(MISTERY_MESSAGE), { onError, minSamples }), s);

const secsToMicrosecs = seconds => seconds * 1000000;

const printStandingArray = ({ name, hz, stats }, index, standingsArray) => ({
  name,
  mean: `${secsToMicrosecs(stats.mean).toLocaleString('en-US', { minimumFractionDigits }) } μs`,
  diffWithFastestMean: `${(stats.mean / standingsArray[0].stats.mean).toLocaleString('en-US', { minimumFractionDigits })}x`,
  opsPerSecond: hz.toLocaleString('en-US', { minimumFractionDigits }),
  diffWithFastest: `${(standingsArray[0].hz / hz).toLocaleString('en-US', { minimumFractionDigits })}x`,
  result: functions[name](MISTERY_MESSAGE),
})

console.log('Running benchmark:');
addAll(suite)
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('\nFastest is ' + this.filter('fastest').map('name').join(', '));
    console.table(this.sort(compare).map(printStandingArray));
  })
  .on('error', onError)
  .run({ 'async': true });
