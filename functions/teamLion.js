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
    var split1 = misteryMessage.split("   ");
  
    for(var word = 0; word < split1.length; word++) {
      var split2 = split1[word].split(" ");
      
      for(var letter = 0; letter < split2.length; letter++) {
        messageConverted.push(alphabet[split2[letter]]);
      }
  
      messageConverted.push(" ");
    }
  
    return messageConverted.join("");

}
