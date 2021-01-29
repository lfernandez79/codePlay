
let myString = "Jose";
let result = {};

function countChar() {
 for (let i = 0; i < myString.length; i++) {
    const element = myString[i];
     result[element] ? result[element] += 1 : result[element] = 1
 }
 console.log(result)
}
countChar()

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

function hurdleJump(hurdles, jumpHeight) {
    return hurdles.every(num => num <= jumpHeight)
}
console.log(hurdleJump([], 5))

let array = [86, 48, 100, 66];
const isSeven = () => {
    let numbers =  array.join("").split("").map(Number);
    console.log(numbers)
    if(numbers.includes(7)) {
        return "Boom";
    } else {
        return "These is no 7"
    }
}
console.log(isSeven())




