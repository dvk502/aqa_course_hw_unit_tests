/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;

  const wordArr = word.toLowerCase().split('');
  const reversed = wordArr.slice().reverse();

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] !== reversed[i]) return false;
  }
  return true;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (sentence === '' || typeof sentence !== 'string') return [];
  const array = sentence.split(' ');
  const maxLength = Math.max(...array.map((word) => word.length));

  return array.filter((word) => word.length === maxLength);
}

export { isPalindrom, findLongestWords };
