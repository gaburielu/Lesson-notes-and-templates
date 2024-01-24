function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

class calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  divide(x, y) {
    return x / y;
  }

  multiply(x, y) {
    return x * y;
  }
}

function caesarCipher(string, shift) {
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    if (/\s|[^\w\s]/.test(string[i])) {
      cipher += string[i];
    } else {
      let char = _cipherChar(string[i].toLowerCase(), shift);
      if (string[i] === string[i].toLowerCase()) {
        cipher += char;
      } else {
        cipher += char.toUpperCase();
      }
    }
  }
  return cipher;
}

function _cipherChar(char, shift) {
  let alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let shiftModulo = shift % alphabetArr.length;
  for (let x = 0; x < alphabetArr.length; x++) {
    if (char == alphabetArr[x]) {
      if (x + shiftModulo > alphabetArr.length - 1) {
        return alphabetArr[x + shiftModulo - (alphabetArr.length - 1)];
      } else {
        return alphabetArr[x + shiftModulo];
      }
    }
  }
}

class analyzedArray {
  constructor(array) {
    this.average = this.findSum(array);
    this.min = this.findMin(array);
    this.max = this.findMax(array);
    this.length = array.length;
  }

  findSum(arr) {
    let sum = 0;
    arr.forEach((element) => {
      sum += element;
    });
    return sum / arr.length;
  }

  findMin(arr) {
    return Math.min.apply(null, arr);
  }

  findMax(arr) {
    return Math.max.apply(null, arr);
  }
}

function analyzeArray(array) {
  let result = new analyzedArray(array);
  return result;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};

// const x = analyzeArray([1, 8, 3, 4, 2, 6]);
// let calc = new calculator();
// log(calc.multiply(2, 3));
