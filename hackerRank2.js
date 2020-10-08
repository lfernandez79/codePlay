console.log(
    '==================================Anagram 2========================================'
);

let s = 'abcb';
let t = 'cadb';

const validAnagram = () => {
    s.length !== t.length ? false : true;
    let myArr = {}
    // split s
    let sSplitting = s.split('');
    let tSplitting = t.split("");
    console.log(sSplitting, tSplitting);
    // loop through s


};
validAnagram();

// loop through t
// let myArr2 = [];
// for (i = 0; i < tSplitting.length; i++) {
//   let letter = tSplitting[i];
//   myArr2[letter] ? (myArr2[letter] += 1) : (myArr2[letter] = 1);

// }

// let compare = () => {
// for(i=0; i < myArr.length; i++)
//     myArr[i] !== myArr2[i] ? false : true
// }

// const validAnagram = (string1, string2) => {


//     for (let i = 0; i < string1.length; i++) {
//         console.log(string1[i]);
//         // if letter exist, increment, otherwise set to 1

//     }

// }
// validAnagram("elbow", "below")

// let myArray = [-5, -4, -3, -2, -1, 0, 2, 6, 7, 8, 9 ]
// console.log(myArray.length -1)

// const objt = {
//   value: 5,
//   children: [
//     {value: 10},
//     {value: 100},
//     {value: "nested", children: []}
//   ]
// }
// console.log(objt)

let number = "1234567890";
console.log(Number(number))

let zipCode = "759";

const result = function () {
    let zipCodeNoSpaceNoLetters = zipCode.replace(/[\D\s+]/g, "");
    let toNum = zipCodeNoSpaceNoLetters;
    console.log(toNum.length)
    if (toNum.length !== 5) {
        return false
    }
    else if (toNum.length === 5) {
        return Number(toNum)
    }
}
console.log(result())