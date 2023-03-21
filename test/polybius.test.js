// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius",()=>{
    //happy path
    it("should encrypt a message by rewriting each letter to numbered pairs",()=>{
        const input = "thinkful";
        const actual = polybius(input);
        const expected = "4432423352125413";
  
        expect(actual).to.equal(expected);
    });

    it("should translate the letters 'i' and 'j' to 42",()=>{
        const input = "jim";
        const actual = polybius(input);
        const expected = "424223";
  
        expect(actual).to.equal(expected);
    
    });

    it("should translate 42 to the letters 'i' and 'j'", () => {
        const input = "4432423352125413";
        const actual = polybius(input, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
  
    it("should ignore capital letters", () => {
        const actual = polybius("Hello");
        const expected = polybius("hello");
        //->"3251131343"
  
        expect(actual).to.equal(expected);
    });

    it("should leave spaces as is when encoding", () => {
        const input = "Hello world";
        const actual = polybius(input);
        const expected = "3251131343 2543241341";
  
        expect(actual).to.equal(expected);
    });

    it("should leave spaces as is when decoding", () => {
        const input = "3251131343 2543241341";
        const actual = polybius(input, false);
        const expected = "hello world";
  
        expect(actual).to.equal(expected);
    });
});
