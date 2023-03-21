// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar")

describe("caesar", () => {
    //happy path
    it("should encode a message correctly", () => {
        const input = "thinkful";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "wklqnixo";
  
        expect(actual).to.equal(expected);
    });

    it("should return false if the shifted amount is 0", () =>{
        const input = "hello world";
        const shift = 0;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
    })

    it("should return false if the shifted amount is above 25", () => {
        const input = "hello world";
        const shift = 26;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
  
    it("should return false if the shift amount is less than -25", () => {
        const input = "hello world";
        const shift = -26;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
    });

    it("should ignore capital letters", () => {
        const input = "This is a secret";
        const shift = 8;
        const actual = caesar(input, shift);
        const expected = "bpqa qa i amkzmb";
  
        expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const input = "zoomy";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "crrpb";
  
        expect(actual).to.equal(expected);
    });  

    it("should leave spaces and other non alphabetic characters as is", () => {
        const input = "hello world!";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "khoor zruog!";
  
        expect(actual).to.equal(expected);
    });
});
