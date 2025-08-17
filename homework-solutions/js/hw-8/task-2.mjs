/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  return wordsArr.toSorted((a, b) => {
    const first = a.split('').reduce((sum, x) => {
      return 'aeiou'.includes(x.toLowerCase()) ? ++sum : sum;
    }, 0);

    const second = b.split('').reduce((sum, x) => {
      return 'aeiou'.includes(x.toLowerCase()) ? ++sum : sum;
    }, 0);

    return first - second;
  });
}

// function sortedByVowels(wordsArr) {
//   return wordsArr.toSorted((a, b) => {
//     let vowelsA = 0;
//     let vowelsB = 0;

//     for (let index = 0; index < a.length; index++) {
//       const char = a[index].toLocaleLowerCase();
//       if ('aeiou'.includes(char)) vowelsA++;
//     }
//     for (let index = 0; index < b.length; index++) {
//       const char = b[index].toLocaleLowerCase();
//       if ('aeiou'.includes(char)) vowelsB++;
//     }
//     return vowelsA - vowelsB;
//   });
// }

export { sortedByVowels };
