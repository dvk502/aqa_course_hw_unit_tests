/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const mergeArrays = [];
  for (let i = 0; i < arrays.length; i++) {
    const tempArray = arrays[i];
    for (let j = 0; j < tempArray.length; j++) {
      mergeArrays.push(tempArray[j]);
    }
  }
  return mergeArrays;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const sentenceInArray = sentence.replace(/\s+/g, ' ').split(' ');
  let changedSentence = '';
  for (let i = 0; i < sentenceInArray.length; i++) {
    if (i === 0) {
      sentenceInArray[i] = sentenceInArray[i].charAt(0).toLowerCase() + sentenceInArray[i].slice(1).toLowerCase();
    } else {
      sentenceInArray[i] = sentenceInArray[i].charAt(0).toUpperCase() + sentenceInArray[i].slice(1).toLowerCase();
    }
  }
  changedSentence = sentenceInArray.join('_');

  return changedSentence;
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const array = [0, 1];
  if (n == 0) return array[0];
  if (n == 1) return array[1];

  for (let i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array[n];
}

export { mergeArrays, fibonacci, devideBy };
