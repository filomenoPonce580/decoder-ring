// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const actualAlphabet = "";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  }


  //from rob
  substitution("thinkful", "fake26characteralphabet")
    //t's actual position is replaced with same index in fake alphabet

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
