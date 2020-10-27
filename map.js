let mathSum = (a, b) => a + b
console.log(mathSum(10, 20))

var mathSub = function (a, b) {
    return a - b
}
console.log(mathSub(50, 30))

let myStr = "how can i turn this string into separate values and have the first letter coverted to capitalized"
myStr.split(" ")
let firstLetterUpperCase = (myStr.split(" ").map(letter => letter[0].toUpperCase() + letter.slice(1)).join(" "))
console.log(firstLetterUpperCase)


