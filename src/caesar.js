// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  //create alphabet variable. 2 iterations. positive shift uses first iteration[0-25], negative shift uses second[26-51]
  const alphabet ="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

  //input: word being decifered of encrypted
  //shift: shift in letters
  //encode: true means encrypt, false means decifer
  function caesar(input, shift, encode = true) {
    //terminate early if shift is invalid
    if(!shift || shift > 25 || shift < -25 || shift === 0) return false
  
    //mutate alphabet and input into arrays
      //&input to lowercase
    let splitInput = input.toLowerCase().split("")
    let alphabetArray = alphabet.split("")
  
    //create result
    let result
  
    //if encode = false, flip shift
    if (encode === false){
      shift = shift *-1
    }
  
    //if statements
    //+shift, search by first indexOf and shift right
    if(shift > 0){
      result = splitInput.map((letter)=>{
        //account for spaces & special characters
        if (letter.match(/[^a-z]/)){
          return letter
        }else{
          return alphabetArray[alphabetArray.indexOf(letter) + shift]
        }
      })
    //-shift, search by lastIndexOf and shift left
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






// //create alphabet variable. 2 iterations. positive shift uses first iteration[0-25], negative shift uses second[26-51]
// const alphabet ="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

//   //input: word being decifered of encrypted
//   //shift: shift in letters
//   //encode: true means encrypt, false means decifer
// function caesar(input, shift, encode = true) {
//   //terminate early if shift is invalid
//   if(!shift || shift > 25 || shift < -25 || shift === 0) return false

//   //mutate alphabet and input into arrays
//     //&input to lowercase
//   let splitInput = input.toLowerCase().split("")
//   let alphabetArray = alphabet.split("")

//   //create result
//   let result

//   //if encode = false, flip shift
//   if (encode === false){
//     shift = shift *-1
//   }

//   //if statements
//   //+shift, search by first indexOf and shift right
//   if(shift > 0){
//     result = splitInput.map((letter)=>{
//       //account for spaces & special characters
//       if (letter.match(/[^a-z]/)){
//         return letter
//       }else{
//         return alphabetArray[alphabetArray.indexOf(letter) + shift]
//       }
//     })
//   //-shift, search by lastIndexOf and shift left
//   }else{
//     result = splitInput.map((letter)=>{
//       if(letter.match(/[^a-z]/)){
//         return letter
//       }else{
//         return alphabetArray[alphabetArray.lastIndexOf(letter) + shift]        
//       }
//     })    
//   }

//   return result.join('')
// }


module.exports = { caesar: caesarModule.caesar };
