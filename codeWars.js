//How mamy trues you can find in the array, neded value. 

const { turquoise } = require("color-name");

let array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

const howManyTrues = () => {
    return array1.filter(item => {
        if (item == true) {
            return item
        }
    }).length
}
console.log(howManyTrues())

//  You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

let unsortArray = [5, 8, 6, 3, 4];
const sortArray = () => {
    const oddNum = [];
    const evenNum = [];
    const oddNumSorted = [];

    unsortArray.forEach(num => {

        if (num % 2 === 0) {
            evenNum.push(num)
        } else {   
            oddNum.push(num)  
        }
    })
    
    oddNum.sort((a, b) => a - b)
    
    unsortArray.forEach(n => {
        if (n % 2 === 0) {
            oddNumSorted.push(evenNum.shift())    
        } else {
            oddNumSorted.push(oddNum.shift())
        }
    });
     return oddNumSorted
}
console.log(sortArray())

// OR
let unsortArray2 = [7, 8, 6, 5, 4];
const newSortarray = () => {
    const odd = unsortArray2.filter(n => n % 2 !== 0)
    const sorted = odd.sort((a, b) => a-b);
    unsortArray2.map(n => n % 2 === 0 ? n : odd.shift())
    
}
newSortarray()

// Square Every Digit
const squareEveryDigit = (num) => {
    
    const numArray = ([...`${num}`].map(Number)) // number pass to an array
    const squared = numArray.map(n => Math.pow(n, 2))
    return Number(squared.join(""))
}
console.log(squareEveryDigit(9119))

// compare two string if they have same ending.
let str = "ninjaleoja";
let ending = "ja";

const compare = () => {
  if(str.endsWith(ending)) {
      return true
  }
  return false
    
}
console.log(compare());

const findSum = (n) => {
 let total = 0;
 for (let i = 0; i <= n; i++) {
     const n = i;
     if(n % 3 === 0 || n % 5 === 0) {
        total += n
     } 
  }
  return total
}
console.log(findSum(10))
