

// (function () {
//     console.log(1);

//     setTimeout(function () {
//         console.log(2)
//     }, 1000);
//     setTimeout(function () {
//         console.log(3)
//     }, 0);
//     console.log(4);
// })
//     ();

// function factorial(num) {
//     if (num < 0) {
//         return -1;
//     }
//     else if (num === 0) {
//         return 1;
//     }
//     return num * factorial(num - 1)
// }
// console.log(factorial(5))

// console.log("// OR ===============================")

// const fact = n => {
//     return n < 2 ? 1 : n * fact(n - 1);
// }
// console.log(fact(5))


// let arr = [8, 9, 7, 2, 3]

// arr.forEach((element, index) => {
//     console.log(`This ${element} is at index: ${index}`);
// });


// console.log("========= Find an element in the array and get me the index value of it ========")
// function search(array, item) {
//     console.log(array.indexOf(item))
// }
// search([2, 3, 10], 10)

// console.log("========== if there is space, return false otherwise true ==========")
// let str = "#######";
// console.log(str.indexOf(" ") === -1)

// console.log("========== Basic math sum ==========")
// const sum = (a, b) => a + b;
// console.log(sum(2, 8));

// console.log("========== just Array practice ========= ")
// let myStr = "Lenny Fernandez";
// const splitted = myStr.split(" ")
// const filter = splitted.filter(words => words.length <= 5)
// console.log(filter)

// console.log("========== Sum of Found Indexes in array which match the chosen number ==========")


// const reducing = (array, n) =>
//     array.reduce((sum, num, index) => sum + (num === n ? index : 0), 0)
//     console.log(reducing([1, 2, 3, 3, 3, 2], 1))

// let myArray = [1, 2, 3]
// myArray.forEach((el, index) => console.log(index))

// let myString = "jose leonardo. fernandez arellano, 1979 semi-developer?"
// howManyWords = () => {
//     let myStrSplit = myString.replace(/[0-9\,\.\?]/g, "").split(" ")
//     console.log(myStrSplit)
// }
// howManyWords()

function noOdds(arr) {
    arr.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
        else {
            false
        }
    });
}
noOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

let myArr = [300, 200, 600, 150];
console.log(Math.max(...myArr));

// Destructuring using "for of" loop
let names = [];
let people = [
    {
        myName: "Leo",
        family: {
            wife: "Guera",
            daugthers: {
                child1: "Isabella",
                child2: "Cecelia"
            },
            pet: "Dog gracie",
        },
        age: 41,
        myBrother: "Abraham"
    },
];

for (const { myName, family: { wife: w, daugthers: { child1: i, child2: c }, pet: g }, age: a, myBrother: b } of people) {

    console.log(`My name is ${myName}, my wife's name is ${w}.\n I have two girls, their names are ${i} and ${c}. I also have a dog ${g} and finally I'm ${a} years old`)
    names.push(myName, b);
    console.log(names)
}


findBob = nombres => {
    return nombres.indexOf("Bob")
}
console.log(findBob(["Jimmy", "Layla", "mandy", "Leo", "mandy", "Bob"]))


let num = [1,2,3,4,5,6,7,8,9];
console.log(num.length)
