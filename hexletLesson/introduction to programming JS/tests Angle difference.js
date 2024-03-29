/*Задача Разница углов
Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.
Разница между двумя углами можно измерить двумя способами: по часовой и против часовой стрелки.
Функция должна вернуть наименьшее из двух значений разницы.
*/

const angleDifference = (a, b) => {
  const diff = Math.abs(a - b);
  if (diff > 180) {
    return 360 - diff;
  }
  return diff;
};

const answer = angleDifference(0, 190);
console.log(answer);

export default angleDifference;

/*Объяснения:
const diff = Math.abs(a - b);: Эта строка вычисляет абсолютную разницу между углами a и b. Функция Math.abs() возвращает абсолютное значение числа, то есть, если разница отрицательна, она становится положительной.
if (diff > 180) { return 360 - diff; }: Этот блок проверяет, превышает ли абсолютная разница между углами 180 градусов. Если да, это значит, что ближайшее направление между углами будет через другую сторону круга. В таком случае, функция возвращает разницу между 360 и текущей разницей. Это сделано для того, чтобы получить "кратчайший" путь между углами.
return diff;: Если абсолютная разница не превышает 180 градусов, то функция просто возвращает текущую разницу между углами. В этом случае, ближайшее направление между углами будет кратчайшим путем в пределах круга.
*/

const diffn = (a, b) => {
  const angleClockwise = Math.abs(b - a);
  const angleCounterClockwise = 360 - angleClockwise;
  return Math.min(angleClockwise, angleCounterClockwise);
};

const answerDiff = diffn(120, 280);
console.log(answerDiff);

export default diffn;

/*Объяснения:
const angleClockwise = Math.abs(b - a);: Эта строка вычисляет угол между двумя значениями a и b по часовой стрелке. Функция Math.abs() используется для получения абсолютной разницы между углами.
const angleCounterClockwise = 360 - angleClockwise;: Затем мы вычисляем угол против часовой стрелки. Поскольку полный круг составляет 360 градусов, мы вычитаем угол по часовой стрелке из 360.
return Math.min(angleClockwise, angleCounterClockwise);: Возвращаем минимальное значение между углами по и против часовой стрелки. Это делается потому, что мы хотим выбрать кратчайший путь между углами, и минимальное значение представляет собой этот кратчайший путь.
*/