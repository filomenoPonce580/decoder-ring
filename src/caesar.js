const caesarModule = (function () {
  //create alphabet variable. 2 iterations. positive shift uses first iteration[0-25], negative shift uses second[26-51]
  const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

  //input: word being deciphered of encrypted
  //shift: shift in letters
  //encode: true means encrypt, false means decipher
  function caesar(input, shift, encode = true) {
    //terminate early if the shift is invalid
    if(!shift || shift > 25 || shift < -25 || shift === 0) return false

    //mutate alphabet and input into arrays (&input to lowercase)
    let splitInput = input.toLowerCase().split("")
    let alphabetArray = alphabet.split("")

    //create result
    let result

    //if encode is false, flip shift
    if (encode === false){
      shift = shift *-1
    }

    //if statements
    //positive shift, search by first indexOf and shift right
    if(shift > 0){
      result = splitInput.map((letter)=>{
        //account for spaces & special characters
        if (letter.match(/[^a-z]/)){
          return letter
        }else{
          return alphabetArray[alphabetArray.indexOf(letter) + shift]
        }
      })
    //negative shift(), search by lastIndexOf and shift left
    }else{
      result = splitInput.map((letter)=>{
        if(letter.match(/[^a-z]/)){
          return letter
        }else{
          return alphabetArray[alphabetArray.lastIndexOf(letter) + shift]        
        }
      })    
    }

    return result.join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
