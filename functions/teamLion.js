module.exports = misteryMessage => {

    const alphabet = {
        ".-": 'a',
        "-...": 'b',
        "-.-.": 'c',
        "-..": 'd',
        ".": 'e',
        "..-.": 'f',
        "--.": 'g',
        "....": 'h',
        "..": 'i',
        ".---": 'j',
        "-.-": 'k',
        ".-..": 'l',
        "--": 'm',
        "-.": 'n',
        "---": 'o',
        ".--.": 'p',
        "--.-": 'q',
        ".-.": 'r',
        "...": 's',
        "-": 't',
        "..-": 'u',
        "...-": 'v',
        ".--": 'w',
        "-..-": 'x',
        "-.--": 'y',
        "--..": 'z'
    }

    var messageConverted = [];
    var words = misteryMessage.split("   ");
  
    for(var wordIdx = 0; wordIdx < words.length; wordIdx++) {
      var letters = words[wordIdx].split(" ");
      
      for(var letterIdx = 0; letterIdx < letters.length; letterIdx++) {
        messageConverted.push(alphabet[letters[letterIdx]]);
      }
  
      messageConverted.push(" ");
    }
  
    return messageConverted.join("");

}
