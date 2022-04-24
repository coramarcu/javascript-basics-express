const getNthElement = (index, array) => {
  // your code here
  if (index > array.length - 1) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  // your code here
  return array.reduce((total, element) => `${total},${element}`);
};

const csvStringToArray = string => {
  // your code here
  const newArr = [];
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  const secondArr = [element];
  return array.concat(secondArr);
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(number => {
    return number.toString();
  });
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(element => {
    return element.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  // your code here
  // 1. map() through 'strings' array to reach each word one by one so you can do things to them in turn (reverse letters)
  // 2. for each word, turn it into an array of characters
  const arrayOfArraysOfCharacters = strings.map(string => string.split(''));
  // 3. map through the new array of arrays and reverse() each array of characters
  const arrayOfArraysOfReversedCharacters = arrayOfArraysOfCharacters.map(
    array => array.reverse()
  );
  // 4. map through the new array and reduce each array of characters to a string (you get the reversed words into a new array)
  const finalArrayOfReversedWords = arrayOfArraysOfReversedCharacters.map(
    array => {
      return array.reduce((reversedWord, currentLetter) => {
        return reversedWord + currentLetter;
      });
    }
  );
  return finalArrayOfReversedWords;
};

const onlyEven = numbers => {
  // your code here
  const evenNums = [];
  numbers.forEach(num => {
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  });
  return evenNums;
};

const removeNthElement2 = (index, array) => {
  // your code here
  if (index === undefined) {
    return array;
  }
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr[i] = array[i];
  }
  newArr.splice(index, 1);
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  const returnArr = [];
  for (let i = 0; i < strings.length; i += 1) {
    if (strings[i].search(/^[aeiou]/i) >= 0) {
      returnArr.push(strings[i]);
    }
  }
  return returnArr;
};

const removeSpaces = string => {
  // your code here
  const array = string.split(' ');
  return array.join('');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((total, number) => {
    return total + number;
  });
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort((a, b) => {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  })

};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
