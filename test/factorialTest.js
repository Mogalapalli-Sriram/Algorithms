const expect = require("chai").expect;
const factorialRecursion = require("../recursions/factorial.js");

describe("tests a recursion" , function() {

       it("tests a factorial functionality", function() {
       expect(factorialRecursion.factorial(6)).to.equal(720);
       });

});