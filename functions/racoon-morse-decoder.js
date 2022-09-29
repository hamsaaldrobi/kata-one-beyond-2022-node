const alphabet = {
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9",
  ".-":"a",
  "-...":"b",
  "-.-.":"c",
  "-..":"d",
  ".":"e",
  "..-.":"f",
  "--.":"g",
  "....":"h",
  "..":"i",
  ".---":"j",
  "-.-":"k",
  ".-..":"l",
  "--":"m",
  "-.":"n",
  "---":"o",
  ".--.":"p",
  "--.-":"q",
  ".-.":"r",
  "...":"s",
  "-":"t",
  "..-":"u",
  "...-":"v",
  ".--":"w",
  "-..-":"x",
  "-.--":"y",
  "--..":"z",
};

// 1 spacio -> spaar caracteres
/// 3 -> Sepaar palabras

// --- -. .   -... . -.-- --- -. -.. -> ONE BEYOND

// *********************** FINAL ************************************
// .-- .... .- -   .... .- - ....   --. --- -..   .-- .-. --- ..- --. .... -
// ******************************************************************


// coger mensaje
// dividir palabras
// dividir espacios
// traducir cada palabra

module.exports = (misteryMessage = '') => {
  const WORD_DIVIDER = '   '
  const LETTER_DIVIDER = ' '


  const words = misteryMessage.split(WORD_DIVIDER)
  const letters = words.map(word => {
    const singleLetters = word.split(LETTER_DIVIDER)
    return singleLetters.map(letter => alphabet[letter]).join('')
  })
  return letters.join(' ')
}