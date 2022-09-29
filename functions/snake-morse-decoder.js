const { MORSE_DICTIONARY } = require('../constants/snake-dictionary');

const decodeMorseLetter = letter => MORSE_DICTIONARY[letter];

const decodeMorseWord = word => word.split(' ').map(decodeMorseLetter).join('');

module.exports = morseCode => morseCode.split('   ').map(decodeMorseWord).join(' ');
