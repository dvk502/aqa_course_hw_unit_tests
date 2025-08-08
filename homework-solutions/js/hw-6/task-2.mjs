/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;

resultUnique = [];

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const myPizzas = [...myPizzasT1, ...myPizzasT2];

// for (let index = 0; index < myPizzas.length; index++) {
//   myPizzas[index] = myPizzas[index].toLowerCase();
// }

for (let i = 0; i < myPizzas.length; i++) {
  if (!competitorPizzas.map((x) => x.toLocaleLowerCase()).includes(myPizzas[i].toLocaleLowerCase())) {
    resultUnique.push(myPizzas[i]);
  }
}

if (!myPizzas.includes(competitorPizzas)) {
  resultNull = null;
}

export { resultNull, resultUnique };
