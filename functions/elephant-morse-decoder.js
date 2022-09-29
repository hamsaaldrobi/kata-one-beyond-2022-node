const map1 = new Map();
map1.set('.-',    'a');
map1.set('-...',  'b');
map1.set('-.-.',  'c');
map1.set('-..',   'd');
map1.set('.',     'e');
map1.set('..-.',  'f');
map1.set('--.',   'g');
map1.set('....',  'h');
map1.set('..',    'i');
map1.set('.---',  'j');
map1.set('-.-',   'k');
map1.set('.-..',  'l');
map1.set('--',    'm');
map1.set('-.',    'n');
map1.set('---',   'o');
map1.set('.--.',  'p');
map1.set('--.-',  'q');
map1.set('.-.',   'r');
map1.set('...',   's');
map1.set('-',     't');
map1.set('..-',   'u');
map1.set('...-',  'v');
map1.set('.--',   'w');
map1.set('-..-',  'x');
map1.set('-.--',  'y');
map1.set('--..',  'z');
map1.set('.----', '1');
map1.set('..---', '2');
map1.set('...--', '3');
map1.set('....-', '4');
map1.set('.....', '5');
map1.set('-....', '6');
map1.set('--...', '7');
map1.set('---..', '8');
map1.set('----.', '9');
map1.set('-----', '0');

module.exports = (misteryMessage) => {
    return misteryMessage
      .split('   ') // separate words
      .map(
        a => a
          .split(' ') // separate characters
          .map(
            b => map1.get(b)
          ).join('')
      ).join(' ');
}