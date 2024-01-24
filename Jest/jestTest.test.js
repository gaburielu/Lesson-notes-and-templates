const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./jestTest.js");

test("Properly capitalize first letter in a string", () => {
  expect(capitalize("rambo")).toBe("Rambo");
});

test("Properly reverse the order of a string", () => {
  expect(reverseString("the red fox")).toBe("xof der eht");
});

test("Properly add two numbers", () => {
  let calc = new calculator();
  expect(calc.add(2, 3)).toBe(5);
});

test("Properly subtract two numbers", () => {
  let calc = new calculator();
  expect(calc.subtract(4, 3)).toBe(1);
});

test("Properly divide two numbers", () => {
  let calc = new calculator();
  expect(calc.divide(9, 3)).toBe(3);
});

test("Properly multiply two numbers", () => {
  let calc = new calculator();
  expect(calc.multiply(5, 2)).toBe(10);
});

test("Ceasar Cipher a string with shift of 2", () => {
  expect(caesarCipher("Hello World!", 2)).toBe("Jgnnq Yqtnf!");
});

test("Ceasar Cipher a string with shift of 29", () => {
  expect(caesarCipher("Whats Upp!!", 29)).toBe("Zkdwv Xss!!");
});

test("analyzeArray function returns an object with min, max, length and average properties", () => {
  const array = [1, 3, 2, 6, 8];

  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 5,
  });
});
