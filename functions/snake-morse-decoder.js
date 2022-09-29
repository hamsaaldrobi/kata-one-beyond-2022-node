const { MORSE_DICTIONARY } = require('../constants/snake-dictionary');

module.exports = morseCode => morseCode.split('   ').map(word => word.split(' ').map(letter => MORSE_DICTIONARY[letter]).join('')).join(' ');
