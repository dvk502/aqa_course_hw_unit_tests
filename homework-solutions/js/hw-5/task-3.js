/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowels = 0;
let consonants = 0;

for (let index = 0; index < word.length; index++) {
  const char = word[index].toLocaleLowerCase();
  if ('aeiou'.includes(char)) {
    vowels++;
  } else consonants++;
}

vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`;

export { vowelsAndConsonantsResult };
