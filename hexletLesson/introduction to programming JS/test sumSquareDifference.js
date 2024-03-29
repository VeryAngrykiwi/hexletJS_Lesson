/*Задача
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.
Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.
Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

//chatGPT
const sumSquareDifference = (n) => {
  const sum = (n * (n + 1)) / 2; // Сумма первых n натуральных чисел

  const sumOfSquares = (n) => (n === 1 ? 1 : n * n + sumOfSquares(n - 1)); // Сумма квадратов первых n натуральных чисел

  return Math.pow(sum, 2) - sumOfSquares(n); // Разница между квадратом суммы и суммой квадратов
};

// Пример использования:
const result = sumSquareDifference(10);
console.log(result); // Ожидаемый результат: 2640
/*Теперь пояснение для sumOfSquares:
const sumOfSquares = (n) => (n === 1 ? 1 : n * n + sumOfSquares(n - 1));: Это рекурсивная функция, которая вычисляет сумму квадратов первых n натуральных чисел.
Если n равно 1, возвращаем 1 (базовый случай).
В противном случае, вычисляем n * n и добавляем результат рекурсивного вызова sumOfSquares(n - 1).
return Math.pow(sum, 2) - sumOfSquares(n);: Возвращаем разницу между квадратом суммы первых n натуральных чисел и суммой квадратов первых n натуральных чисел.
Эта рекурсивная версия sumSquareDifference использует рекурсию для вычисления суммы квадратов, что делает код более выразительным. Однако рекурсивные вызовы могут стать причиной переполнения стека при больших значениях n. Если производительность важна, рекомендуется использовать нерекурсивные подходы.
*/

//replit
const sumSquareDifference = (n) => {
  let sumSquare = 0;
  let squareSum = 0;

  // Итерируем от 1 до n
  for (let i = 1; i <= n; i++) {
    // Вычисляем сумму квадратов первых n натуральных чисел
    sumSquare += i ** 2;

    // Вычисляем сумму первых n натуральных чисел
    squareSum += i;
  }

  // Вычисляем разницу между квадратом суммы и суммой квадратов
  return squareSum ** 2 - sumSquare;
};

// Пример использования:
console.log(sumSquareDifference(10)); // Ожидаемый результат: 2640
/*Объяснения:
let sumSquare = 0; и let squareSum = 0;: Инициализация переменных sumSquare и squareSum для хранения суммы квадратов и суммы первых n натуральных чисел соответственно.
for (let i = 1; i <= n; i++) { ... }: Цикл, который итерирует от 1 до n.
sumSquare += i ** 2;: На каждой итерации к переменной sumSquare добавляется квадрат текущего числа i.
squareSum += i;: На каждой итерации к переменной squareSum добавляется текущее число i.
return squareSum ** 2 - sumSquare;: Вычисление разницы между квадратом суммы и суммой квадратов первых n натуральных чисел.
В результате, если вызвать sumSquareDifference(10), функция вернет 2640, что является разницей между квадратом суммы и суммой квадратов первых 10 натуральных чисел.
*/

