

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


findBob = nombres => {
    return nombres.indexOf("Bob")
}
console.log(findBob(["Jimmy", "Layla", "mandy", "Leo", "mandy", "Bob"]))

const tpChecker = (home) => {
    let totalDays = 14
    let perRoll = 500 * home.tp;
    let perPersonperDaySheets = 57 * home.people;
    let daysTPwillLast = Math.floor(perRoll / perPersonperDaySheets);
    return daysTPwillLast < totalDays ? `Your TP will only last ${daysTPwillLast} days, buy more!` : `Your TP will last ${daysTPwillLast} days, no need to panic!`
}
console.log(tpChecker({people: 1, tp: 1}))

