const dictionary = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "-....-": "-",
    "-..-.": "/",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")"
}


  const decodeMysteryMessage = (dictionary, misteryMessage) => {
    const words = misteryMessage.split('   ')
    const finalWords = []
    const len = words.length

    for(let i=0; i<len; i++) {
        const word = words[i]
        const letters = word.split(' ')
        const wordLetters = []
        const lettersLen = letters.length
        for(let i=0; i<lettersLen; i++) {
            wordLetters.push(dictionary[letters[i]])
        }
        finalWords.push(wordLetters.join(''))
    }
   return finalWords.join(' ')
  }

  module.exports = (misteryMessage) => decodeMysteryMessage(dictionary, misteryMessage)