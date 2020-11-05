
let myString = "Lenny";
let result = {};
// console.log(myString.length)

function countChar() {
 for (let i = 0; i < myString.length; i++) {
    const element = myString[i];
     result[element] ? result[element] += 1 : result[element] = 1
 }
 console.log(result
    )
}
countChar()

console.log("// ========== Anagrams ==========");
const validAnagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }

    let obj = {};
    for (let i = 0; i < string1.length; i++) {
        let letter = string1[i];
        // if letter exist, increment, otherwise set to 1
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }
    console.log(obj)

    for (let i = 0; i < string2.length; i++) {
        const letter = string2[i];
        // if can't find letter in or letter is zero then it is not an anagram
        !obj[letter]  ? false : obj[letter] -= 1
        console.log(letter)
    }
}
validAnagram("elbow", "below")

console.log("========== Multi pointer patterns, which pair will result in 0 ==========");

function multiPointers(array) {
    let left = 0;
    let right = array.length -1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        }
        else if(sum > 0) {
            right--
        }
            left++
    }
}
console.log(multiPointers([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]))


const flipping = (name) => {
    let array = [];
    const strReversed = name.split("").reverse().join("").toLowerCase();
    array.push(strReversed)
    return array
};
console.log(flipping("Jose Leonardo Fernandez"));