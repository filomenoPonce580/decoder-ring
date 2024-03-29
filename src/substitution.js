const substitutionModule = (function () {
  const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    //guard clause: alphabet is 26 characters & all characters unique
    if(!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== alphabet.length) return false

    //remap the input and modify it based on the incoming alphabet compared to the actual alphabet
    return input
      .toLowerCase()
      .split('')
      //letter->actual index -> same index on new alphabet -> value
      .map((character)=>{
        if (character.match(" ")) return character;           //keeps spaces
        if(encode){
          return alphabet[actualAlphabet.indexOf(character)]
        }else{
          return actualAlphabet[alphabet.indexOf(character)]
        }
      })
      .join('')
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


/*
TESTS
console.log(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")); //> 'jrufscpw'
console.log(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")); //> 'elp xhm xf mbymwwmfj dne'
console.log(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)); //> 'thinkful'

        console.log("**********************")

console.log(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")); //> "y&ii$r&"
console.log(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)); //> "message"

          console.log("**********************")

console.log(substitution("thinkful", "short")); //> false
console.log(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")); //> false
*/
