// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //create data sets to decifer and encode
  const decodeDB = {
    "11": "A",
    "21": "B",
    "31": "C",
    "41": "D",
    "51": "E",
    "12": "F",
    "22": "G",
    "32": "H",
    "42": "(I/J)", //Output -> th(i/j)nkful
    "52": "K",
    "13": "L",
    "23": "M",
    "33": "N",
    "43": "O",
    "53": "P",
    "14": "Q",
    "24": "R",
    "34": "S",
    "44": "T",
    "54": "U",
    "15": "V",
    "25": "W",
    "35": "X",
    "45": "Y",
    "55": "Z"
  }
  
  const encodeDB = {
    "A": "11",
    "B": "21",
    "C": "31",
    "D": "41",
    "E": "51",
    "F": "12",
    "G": "22",
    "H": "32",
    "I": "42",
    "J" : "42",
    "K": "52",
    "L": "13",
    "M": "23",
    "N": "33",
    "O": "43",
    "P": "53",
    "Q": "14",
    "R": "24",
    "S": "34",
    "T": "44",
    "U": "54",
    "V": "15",
    "W": "25",
    "X": "35",
    "Y": "45",
    "Z": "55",
    " ": " "
  }
  
  //input: word going in that needs to be decoded or encoded
  //encode: T=words encoded into numbers, F=numbers decoded into words
  //output: string, lowercase, keep spaces
  function polybius(input, encode = true) {
    //exit if numbers uneven
    if (!encode && input.replace(/\s/g, "").length % 2 !== 0) return false
  
    //True: make input uppercase, split, map using correct DB, join and make lowerCase
    if(encode){
      return input
        .toUpperCase()
        .split('')
        .map((character)=>{
          return encodeDB[character]
        })
        .join('')
        .toLowerCase()
    }else if(!encode){
    //False: 
      //1 word: split every 2 characters, map using correct DB, join & make lowercase
      if(input.split(' ').length === 1){
        return input
          .match(/.{2}/g)
          .map((code)=>{
            return decodeDB[code]
          })
          .join('')
          .toLowerCase()
      }else{
        //multiple words, split into array of encoded words, use process above on each word with correct BD, join words with spaces
        return input
          .split(' ')
          .map((encodedWord)=> {
            return encodedWord
            .match(/.{2}/g)
            .map((code)=>{
              return decodeDB[code]
            })
            .join('')
            .toLowerCase()
          })
          .join(' ')
      }
    }
  }
  
  return {
    polybius,
  };
})();


// console.log(polybius("thinkful")); //> "4432423352125413"
// console.log(polybius("Hello world")); //> '3251131343 2543241341'
// console.log('*************************')
// console.log(polybius("3251131343 2543241341", false)); //> "hello world"
// console.log(polybius("4432423352125413", false)); //> "th(i/j)nkful
// console.log(polybius("443242335 21254134", false)); //> false


module.exports = { polybius: polybiusModule.polybius };

