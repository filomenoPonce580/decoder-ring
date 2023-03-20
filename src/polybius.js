// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const lookup = {
    "11": "A",
    "21": "B",
    "42": "I/J", //Output -> th(i/j)nkful
    "43": "O",
    "45": "Y",
    "32": "H"
  }

  const lookupEncode = {
    "A": "11",
    "B": "21",
    "I": "42",
    "J": "42",
    "H": "32"
  }
  function polybius(input, encode = true) {
    // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
