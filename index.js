
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const functions = require('require-all')({
  dirname: `${__dirname}/functions`,
});

const MISTERY_MESSAGE = '... --- ...';

const compare = (a, b) => b.hz - a.hz;

const addAll = s => Object.entries(functions).reduce((agg, [k, v]) => agg.add(k, () => v(MISTERY_MESSAGE)), s);

console.log('Running benchmark:');
addAll(suite)
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('\nFastest is ' + this.filter('fastest').map('name').join(', '));
    console.log(this.sort(compare).map(({ name, hz }) => ({ name, opsPerSecond: hz })));

    console.log('\nDecoders results:');
    Object.entries(functions).forEach(([name, fn]) => console.log(`${name}: ${fn(MISTERY_MESSAGE)}`))
  })
  .on('error', function (error) {
    console.error(error.error);
  })
  .run({ 'async': true });
