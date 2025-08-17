/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const sortedArray = numbers.toSorted((a, b) => a - b);
  let missedNumber = 1 + sortedArray.findIndex((element, index) => element != index + 1);
  return missedNumber === 0 ? sortedArray.length + 1 : missedNumber;
}

export { findMissingNumber };
