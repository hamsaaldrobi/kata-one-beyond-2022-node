const dictionary = {
   '.-'    : 'a',
   '-...'  : 'b',
   '-.-.'  : 'c',
   '-..'   : 'd',
   '.'     : 'e',
   '..-.'  : 'f',
   '--.'   : 'g',
   '....'  : 'h',
   '..'    : 'i',
   '.---'  : 'j',
   '-.-'   : 'k',
   '.-..'  : 'l',
   '--'    : 'm',
   '-.'    : 'n',
   '---'   : 'o',
   '.--.'  : 'p',
   '--.-'  : 'q',
   '.-.'   : 'r',
   '...'   : 's',
   '-'     : 't',
   '..-'   : 'u',
   '...-'  : 'v',
   '.--'   : 'w',
   '-..-'  : 'x',
   '-.--'  : 'y',
   '--..'  : 'z',
   '.----' : '1',
   '..---' : '2',
   '...--' : '3',
   '....-' : '4',
   '.....' : '5',
   '-....' : '6',
   '--...' : '7',
   '---..' : '8',
   '----.' : '9',
   '-----' : '0'
}
module.exports = misteryMessage => {

   const chars = misteryMessage.split(' ')
   let decodedMessage = ''
   for (let i=0; i<chars.length; i++){
      if (chars[i]==='') {
         decodedMessage += ' '
         i++
      }
      else decodedMessage += dictionary[chars[i]]
   } 
   return decodedMessage
   
}
