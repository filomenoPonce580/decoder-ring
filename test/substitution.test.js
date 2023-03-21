// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitustion()", () => {
    //happy path
    it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet);
        const expected = "jrufscpw";
  
        expect(actual).to.equal(expected);
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const input = "input";
        const alphabet = "abcdefg...";
        const actual = substitution(input, alphabet);

        expect(actual).to.be.false;
    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const input = "input";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });


    it("should maintain spaces in the message when encoding", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet);
        const expected = "elp xhm xf mbymwwmfj dne";

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message when decoding", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution(input, alphabet, false);
        const expected = "you are an excellent spy";

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", ()=>{
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution("thinkful", alphabet); //-> 'jrufscpw'
        const expected = substitution("Thinkful", alphabet) //-> 'jrufscpw'

        expect(actual).to.equal(expected)
    });
});
