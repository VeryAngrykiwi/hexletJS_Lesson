// Рекруссивные функции (Recursion function)

  const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

const answer = factorial(3);
console.log(answer);

const sequenceSum = (begin, end) => {
  if (begin === end) {
    return begin;
  }
   else if (begin > end) {
     return NaN;
 }
  else if (begin < end) {
    return begin + sequenceSum(begin + 1, end);
 }
};

const answer = sequenceSum(2, 6);
console.log(answer);

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

const answer = factorial(3);
console.log(answer);

// Рекурсия - Итеративный процесс (Recursion is an iterative process)
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };
  return iter(n, 1);
}; 
