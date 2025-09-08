/**
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

 */

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

async function createTodo({ userId, title, completed }) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'post',
      body: JSON.stringify({ userId, title, completed }),
    });
    if (response.status !== 201) throw new Error(`Unexpected status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    console.log('Функция createTodo завершила работу');
  }
}
