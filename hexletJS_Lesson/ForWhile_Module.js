// поиск минимального делителя (Finding the minimum divisor)
const moduloTest = (number, modulo) => {
  return number % modulo
}

const answer = moduloTest(15, 4);
console.log(answer);

function moduloTest2 (number, modulo) {
  return number % modulo
}

const answer2 = moduloTest2(15, 8);
console.log(answer2);

const minNumber = (n) => {
//  if (n <= 1) {
//    return n;
//  }

  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    if (n % counter === 0){
      acc = counter
    }
    return iter(counter - 1, acc);
  };
  return iter(n + 1, n);
}; 

const answer = minNumber(17);
console.log(answer);

// еще вариант
const smallestDivisor = (n) => {
  if (n === 1 ) {return n}
  if (n < 1 ) {return NaN}
  let dell  = 2;
  while (n % dell !== 0) {
    dell = dell + 1
    console.log(dell);
  }
  return dell;
}

const answer = (smallestDivisor(17));
console.log (answer);

const answer = reverse('Hello');
console.log(answer);


// - проверка числа на простоту (checking the number for simplicity)
const isPrime = (num)=> {
  if (num < 2) {
    return false;
  }
  for (let counter = 2; counter <= Math.sqrt(num); counter++) {
    if (num % counter === 0) {
      return false;
    }
  }
  return true;
}
const answer = isPrime(1);
console.log(answer);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// модули площадь треугольника (modules area of the triangle)
import square from './square.js';
import { getTriangleArea } from './myMathModule.js';

const solution = (n) => getTriangleArea(n, square(n) / 2)

export default solution;

export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
}

// Реверсия текста (Text reversal)
  const reverse = (str) => {
    let i = str.length - 1;
    let result = '';
    while (i >= 0) {
      result = result + str[i];
      i = i - 1;
    }
    return result;
  }

// сравнение кол-во заглавных и строчных букв (comparison of the number of uppercase and lowercase letters)
const bigLettersCount = (str)  => {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result += 1;
    }
  }
  return result;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }
  return 0;
};  

const greaterThan = (first, second) => (
  compare(first, second) === 1);

const lessThan = (first, second) => (
  compare(first, second) === -1); 

const isEqual = (first, second) => (
  compare(first, second) === 0);

// Решение учителя (Teacher's Decision)
import { length, toUpperCase } from './strings.js';

const bigLettersCount = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    if (toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }
  return result;
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }
  return 0;
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);


// типизация сложение цифр в строке (typing addition of digits in a string)
const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = String(result).split('').reduce((acc, item) => Number(acc) + Number(item), 0);
  }
  return result;
}

const answer = addDigits(1259);
console.log(answer);

import { length } from './strings.js';

const sumDigits = (num) => {
  const str = String(num);
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sumDigits(result);
  }

  return result;
};

export default addDigits;


// заглавная буква каждого слова в предложении (the capital letter of each word in the sentence)
const firstLetterCaps = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === 0) {
      result += str[i].toUpperCase();
    } else if (str[i - 1] === ' ' || str[i - 1] === ',') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

const answer = firstLetterCaps('hello, world!');
console.log(answer);

import { length, toUpperCase } from './strings.js';

// Решение учителя (Teacher's Decision)
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }
  return result;
};