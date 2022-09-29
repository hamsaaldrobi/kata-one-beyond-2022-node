const MORSE_CODE = {
    ".-"   : "a",
    "-..." : "b",
    "-.-." : "c",
    "-.."  : "d",
    "."    : "e",
    "..-." : "f",
    "--."  : "g",
    "...." : "h",
    ".."   : "i",
    ".---" : "j",
    "-.-"  : "k",
    ".-.." : "l",
    "--"   : "m",
    "-."   : "n",
    "---"  : "o",
    ".--." : "p",
    "--.-" : "q",
    ".-."  : "r",
    "..."  : "s",
    "-"    : "t",
    "..-"  : "u",
    "...-" : "v",
    ".--"  : "w",
    "-..-" : "x",
    "-.--" : "y",
    "--.." : "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "|"    : " "
};

const decode = (morseMessage) => {    
    let messageDecoded = ''
    let sentences = morseMessage.split('   ');
    for (let i = 0; i < sentences.length; i++){
        const word = sentences[i]
        const words =  word.split(' ')
        for (let x = 0; x < words.length; x++){
        messageDecoded = messageDecoded + MORSE_CODE[words[x]];
        }
        messageDecoded = messageDecoded + ' '
    }
    return messageDecoded;    
}

module.exports = decode;