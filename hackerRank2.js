
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

// const validAnagram2 = (string1, string2) => {


//     for (let i = 0; i < string1.length; i++) {
//         console.log(string1[i]);
//         // if letter exist, increment, otherwise set to 1

//     }

// }
// validAnagram2("elbow", "below")

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


// let number = "1234567890";
// console.log(Number(number))

// console.log(
//     '==================================Anagram 2========================================'
// );

// const validAnagram = (a, b) => {
//     if (a.length !== b.length) {
//         return `These are not valid anagram`;
//     }
//     else {
//         let aSplitting = a.split("").sort();
//         let bSplitting = b.split("").sort();
//         // loop through a
//         for (let i = 0; i < aSplitting.length; i++) {
//             const element = aSplitting[i];
//             const element2 = bSplitting[i]
//             console.log(element, element2)
//             if (element !== element2) {
//                 return false;
//             }
//             else {
//                  `This is an anagram`;
//             }
//         }
//     }
// };
// console.log(validAnagram("abcde", "cadbj"));


// Circular Array

const arrCircular = ["a", "b", "c"]

const findValue = (index) => {
    console.log(`Array length: ${arrCircular.length}`)
    let remainder = index % arrCircular.length;
    console.log(`remainder: ${remainder}`)
    return arrCircular[remainder === 0 ? remainder +1 : remainder -1]
}

console.log(findValue(0))
