
const Benchmark = require('benchmark');
const config = require('./config');

const { minSamples, minimumFractionDigits } = config;

const suite = new Benchmark.Suite;

const functions = require('require-all')({
  dirname: `${__dirname}/functions`,
});

const MISTERY_MESSAGE = '... --- ...';

const compare = (a, b) => b.hz - a.hz;

const onError = err => console.error(err.message);

const addAll = s => Object.entries(functions).reduce((agg, [k, v]) => agg.add(k, () => v(MISTERY_MESSAGE), { onError, minSamples }), s);

const printStandingArray = ({ name, hz }, index, standingsArray) => ({ name, opsPerSecond: hz.toLocaleString('en-US', { minimumFractionDigits }), diffWithFastest: `${(standingsArray[0].hz / hz).toLocaleString('en-US', { minimumFractionDigits })}x`, result: functions[name](MISTERY_MESSAGE) })

console.log('Running benchmark:');
addAll(suite)
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('\nFastest is ' + this.filter('fastest').map('name').join(', '));
    console.table(this.sort(compare).map(printStandingArray));

    console.log('\nDecoders results:');
    Object.entries(functions).forEach(([name, fn]) => console.log(`${name}: ${fn(MISTERY_MESSAGE)}`))
  })
  .on('error', onError)
  .run({ 'async': true });
