console.log('===============Buil the Subsequences===============');

let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  let a = [];
  for (let j = i; j < arr.length; j++) {
    a.push(arr[j]);
  }
  console.log(a);
}

console.log('==================Fun with Anagrams===================');
let anagrams = [];
// passing letter in "word" and for each letter add it  to "anagram" currently as empty string
let getAnagrams = (word, anagram = '') => {
  // base case for recursive function(mean needs a condition to stop function)
  if (!word) {
    anagrams.push(anagram);
    return;
  }
  //  first let loop thorugh "word" (iterator) each letter
  for (let i = 0; i < word.length; i++) {
    // concat current letter to anagram
    anagram += word[i];

    // Recurse over to our function so anagram is going to keep of the current anagram
    // then we are gonna pass in the word without the current letter that we are using in anagram
    getAnagrams(word.slice(0, i) + word.slice(i + 1), anagram);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  // Use ... new SET() to prevent dupliate
  return [...new Set(anagrams)];
};

console.log(getAnagrams('rat'));

console.log(
  '==================padStart/padEnd - stair challenge==================='
);

// padStart Method practice
// add padding spaces at the begining
let myName = 'Leonardo';
console.log(myName.padStart(15));

// padEnd Method practice
// add padding spaces at the end
console.log(myName.padEnd(10), 'hi');

let n = 5;
for (let i = 0; i <= n; i++) {
  console.log('#'.repeat(i).padStart(5));
}

let myWords = ['ABC'];

for (let i = 0; i < myWords.length; i++) {
  const item = myWords[i];
  console.log(item);
  console.log(item.charAt(0));
  console.log(item.slice(i + 1));
  console.log(item.slice(0, i) + item.slice(i + 1));
}

console.log('=================Braces balanced========================');

function balancedBrackets(text, braces = '{}[]()', arr = []) {
  for (let i = 0; i < (text || '').length; i++) {
    let char = text[i];
    console.log(char);

    if (braces.indexOf(char) % 2 === 0) {
      arr.push(braces[braces.indexOf(char) + 1]);
    } else if (char !== arr.pop()) {
      return false;
    }
  }

  return arr.length === 0;
}
console.log(balancedBrackets('[{}]'));

