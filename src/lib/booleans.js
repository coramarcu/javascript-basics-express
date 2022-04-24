function negate(a) {
  // your code here
  return !a;
}

function both(a, b) {
  // your code here
  return a && b;
}

function either(a, b) {
  // your code here
  return a || b;
}

function none(a, b) {
  // your code here
  return !a && !b;
}

function one(a, b) {
  // your code here
  return (a && !b) || (!a && b);
}

function truthiness(a) {
  // your code here
  if (a === 0 || Number.isNaN(a) || a === null || a === undefined || a === '') {
    return false;
  }

  return true;
}

function isEqual(a, b) {
  // your code here
  return a === b;
}

function isGreaterThan(a, b) {
  // your code here
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
}

function isOdd(a) {
  // your code here
  return a % 2 !== 0;
}

function isEven(a) {
  // your code here
  return a % 2 === 0;
}

function isSquare(a) {
  // your code here
  return Math.sqrt(a) % 1 === 0;
}

function startsWith(char, string) {
  // your code here
  return char === string.charAt(0);
}

function containsVowels(string) {
  // your code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (string[i].toLowerCase() === vowels[j]) {
        vowelCount += 1;
      }
    }
  }
  if (vowelCount > 0) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  // your code here
  const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(let i = 0; i < string.length; i += 1) {
      for(let j = 0; j < up.length; j += 1) {
          if(string[i] === up[j]) {
              return false;
          }
      } 
  } return true;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
}