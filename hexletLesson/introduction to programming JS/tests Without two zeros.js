/* Задание
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, чтобы не было двух нулей идущих подряд.
Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.
Построить набор, в котором ноль нулей и ноль единиц, невозможно. Поэтому считаем, что ноль нулей и ноль единиц одновременно не могут быть переданы в функцию
*/

const withoutTwoZeros = (zero, one) => {
  // Внутренняя рекурсивная функция для подсчета способов.
  const countWays = (zero, one, prevDigit) => {
    // Базовый случай: если нулей или единиц стало отрицательное количество, возвращаем 0.
    if (zero < 0 || one < 0) {
      return 0;
    }

    // Базовый случай: если нулей и единиц не осталось, возвращаем 1.
    if (zero === 0 && one === 0) {
      return 1;
    }

    // Инициализируем количество способов.
    let ways = 0;

    // Если предыдущая цифра была 0, у нас есть два варианта: 1 или ничего.
    if (prevDigit !== 0) {
      ways += countWays(zero - 1, one, 0);
    }

    // Если предыдущая цифра была 1, у нас есть только один вариант: 0.
    ways += countWays(zero, one - 1, 1);

    return ways;
  };

  // Вызываем внутреннюю функцию с начальными значениями.
  return countWays(zero, one, undefined);
}

// Вызываем функцию с аргументами 2 нулей и 4 единиц.
const answer = withoutTwoZeros(2, 4);
console.log(answer); // Ожидаемый результат: 10

export default withoutTwoZeros;

/* Объяснения:
withoutTwoZeros: Это основная функция, которую мы экспортируем. Она инициализирует вызов внутренней рекурсивной функции countWays с начальными значениями.
countWays: Это рекурсивная функция, которая подсчитывает количество способов размещения нулей и единиц. Она принимает три параметра: zero - количество оставшихся нулей, one - количество оставшихся единиц, и prevDigit - предыдущая цифра (0 или 1).
Базовые случаи: Если нулей или единиц стало отрицательное количество, возвращаем 0. Если нулей и единиц не осталось, возвращаем 1.
Рекурсивные случаи: Если предыдущая цифра была 0, у нас есть два варианта: добавить 1 или ничего не добавлять (переход к следующей цифре). Если предыдущая цифра была 1, у нас есть только один вариант: добавить 0.
Вызов функции с начальными значениями: Мы вызываем countWays из основной функции с начальными значениями zero, one, и undefined для prevDigit.
Таким образом, функция рекурсивно перебирает все возможные комбинации, учитывая условие "не должно быть двух нулей подряд", и возвращает общее количество способов.
*/
