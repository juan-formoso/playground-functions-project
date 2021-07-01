// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length-1]

  return (lastItem + ', ' + firstItem)
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(number) {
  let largestNumber = Math.max.apply(null, number)
  let result = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === largestNumber) {
      result += 1;
    }
  } return result;
}

// Desafio 7
// Referência utilizada para COMPREENSÃO do comando 'Math.abs();' : https://www.w3schools.com/jsref/jsref_abs.asp
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position < cat2Position) {
      return "cat1";
  } else if (cat2Position < cat1Position) {
      return "cat2";
  } else {
      return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
// Referência utilizada como BASE para desenvolvimento do código abaixo: https://hellodevworld.com/interview-help/fizz-buzz-solution-javascript
function fizzBuzz(arrayOfNumbers) {
  let newArray = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] % 5 === 0 && arrayOfNumbers[index] % 3 === 0) {
      newArray.push("fizzBuzz")
    } else if (arrayOfNumbers[index] % 5 === 0) {
      newArray.push("buzz")
    } else if (arrayOfNumbers[index] % 3 === 0) {
      newArray.push("fizz")
    } else {
      newArray.push("bug!")
    }
  } return newArray;
} 

// Desafio 9
// Referência usada como BASE para desenvolvimento do código abaixo: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
function encode(vowels) {
  vowels = vowels.replace(/a/g, '1');
  vowels = vowels.replace(/e/g, '2');
  vowels = vowels.replace(/i/g, '3');
  vowels = vowels.replace(/o/g, '4');
  vowels = vowels.replace(/u/g, '5');
  return vowels;
}
function decode(numbers) {
  numbers = numbers.replace(/1/g, 'a');
  numbers = numbers.replace(/2/g, 'e');
  numbers = numbers.replace(/3/g, 'i');
  numbers = numbers.replace(/4/g, 'o');
  numbers = numbers.replace(/5/g, 'u');
  return numbers;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
