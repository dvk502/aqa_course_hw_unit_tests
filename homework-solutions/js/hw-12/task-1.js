/**
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

 */

/**
 *  Subtask 1
 *  Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
 */

function delayTwoSeconds(callback) {
  if (typeof callback !== 'function') throw new TypeError('Argument must be a function');

  setTimeout(() => {
    callback();
  }, 2000);
}

console.log('старт');
delayTwoSeconds(() => {
  console.log('Прошло 2 секунды!');
});

/**
 * Subtask 2
 * Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1.
 * Обработайте промис методом .then и выведите результат его резолва в консоль
 */
const resolvedPromise = new Promise((resolve, reject) => resolve(1));
resolvedPromise.then((value) => value);
console.log(resolvedPromise);

/**
 * Subtask 3
 * Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
 * Обработайте промис методом .catch и выведите результат его резолва в консоль
 */
const failedPromise = new Promise((resolve, reject) => {
  reject('Promise Failed');
});

failedPromise.catch((reject) => console.log(reject));
console.log(failedPromise);

/**
 * Subtask 4
 * Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
 */
function promiseNumber(number) {
  return Promise.resolve(number);
}
console.log(promiseNumber(5));

/**
 * Subtask 5
 * Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]),
 * обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then
 */

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) => {
  console.log(`values promise is: ${values}`);
});

/**
 * Subtask 6
 * Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]),
 * обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then
 */

Promise.allSettled([promiseNumber(4), promiseNumber(5), promiseNumber(6)]).then((results) => {
  results.forEach((value) => {
    console.log(`For element:${value} Status is:${value.status}`);
  });
});

/**
 * Subtask 7
 * Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
 */
async function runAll() {
  try {
    const values = await Promise.all([promiseNumber(7), promiseNumber(8), promiseNumber(9)]);
    console.log(`values promise is: ${values}`);
  } catch (error) {
    console.error('Smh went wrong', error.message);
  }
}
runAll();

async function runAllSettled() {
  try {
    const results = await Promise.all([promiseNumber(10), promiseNumber(11), promiseNumber(12)]);
    results.forEach((value) => {
      console.log(`For element:${value} Status is:${value.status}`);
    });
  } catch (error) {
    console.error('Smh went wrong', error.message);
  }
}
runAllSettled();
