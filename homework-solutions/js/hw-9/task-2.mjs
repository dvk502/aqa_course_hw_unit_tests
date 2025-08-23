/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Character not found');
  }
  characters.push(character);
}

function getCharacter(name) {
  for (const element of characters) {
    if (element.name === name) return element;
  }
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') throw new Error('Incorrect type');

  return characters.reduce((summ, value) => {
    if (minAge <= value.age) summ.push(value);
    return summ;
  }, []);
}

function updateCharacter(name, newCharacter) {
  const indexOfCharacter = characters.findIndex((value) => value.name === name);

  if (indexOfCharacter !== -1) {
    characters[indexOfCharacter] = newCharacter;
  } else throw new Error('Element for update not found');
}

function removeCharacter(name) {
  const indexOfCharacter = characters.findIndex((value) => value.name === name);

  if (indexOfCharacter !== -1) {
    characters.splice(indexOfCharacter, indexOfCharacter);
  } else throw new Error('Element for delete not found');
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
