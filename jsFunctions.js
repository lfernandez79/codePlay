// function declaration
// declare a function first then call it, like so:
function sayHello() {
    console.log('Hello Lenny')
    console.log('What is up?')
}
sayHello()


// function taking arguments
function square(num) {
    console.log(num * num)
}
square(9)
square(4)
square(2)

function question(name) {
    console.log('Are you learning JS right' + ' ' + name + '?')
}
question('Lenny')
question('Leo')

function question2(name1, name2) {
    console.log('Are you learning JS right' + ' ' + name1 + ' and ' + name2 + '?')
}
question2('Lenny', 'Leo')

// function that calculate area of a rectangule and return it result,
// with RETURN we are able to use the value or store it in a variable
function areaRectangule(length, width) {
    return length * width
}
console.log(areaRectangule(5, 3))

let city = 'juarez'
function index0Cap() {
    return city.charAt(0).toUpperCase() + city.slice(1)
}
console.log(index0Cap())

var capU = 'juarez'.charAt(1).toUpperCase()
console.log('j' + capU + 'arez')

// function to compare numbers are even or not
function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isEven())
console.log(isEven(4))
console.log(isEven(21))
console.log(isEven(68))
console.log(isEven(333))

// write a function factorial() which takes a single numeric argument
// and returns the factorial of that number, so it multiply lower integer num
// for example factorial of 5 = 5! 5 x 4 x 3 x 2 x 1 = 120
// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
function factorial(num) {
    if (num < 0) {
        return -1
    } else if (num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(5))
console.log(factorial(10))
console.log(factorial(0))

// with a for loop
function factorialLoop(num) {
    let result = 1
    for (let i = 2; i <= num; i++) {
        result = result * i
    }
    return result
}
console.log(factorialLoop(5))

// uncomment to execute every 5 seconds code below
// setInterval(sayHello, 5000) 

// uncomment to execute every 5 seconds annonymous code below
// setInterval(function() {
//   console.log("Hello")
// }, 2000)

console.log("========== compering ==========")
var comperision = function (a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
};

console.log(comperision(1, 1));

let compareTwo = (a, b) => {
    return a === b ? true : false;
};
console.log(compareTwo(1, 1));

//
let compareLenght = function (a, b) {
    return a.length === b.length ? true : false;
};
console.log(compareLenght('hello', 'olleh'));

console.log("========== Array split, slice, indexOf sample =========")
let myArr = 'beer, tequla, bourbon, mezcal'.split(' ');
console.log(myArr);
console.log(myArr[myArr.length - 1]);
// or
console.log(myArr.slice(-1));

let normArr = ['tv', 'appleTV', 'blueRay', 'dvd', 'nintendo', 'Lenny'];
function searchIndexOfItem(normArr, item) {
    return normArr.indexOf(item);
}
console.log(searchIndexOfItem(normArr, 'Lenny'));

console.log("========== // for loops ==========")

let myLoop = () => {
    for (let i = 0; i < 3; i++) {
        console.log([`hello`]);
    }
};
myLoop();

console.log("// Create a function that returns the string \"Burp\" with the amount of \"r's\" determined by the input parameters of the function.")

let longBurp = function (num) {
    return 'Bu' + 'r'.repeat(num) + 'p!';
};
console.log(longBurp(9));

// OR No curly braces is needed since there is no statment but we are producing a value, also we dont need a return either.
// Only if here is a statment like if{} then we need return always
const longBurpEs6 = num => 'Bu' + 'r'.repeat(num) + 'p!';
console.log(longBurpEs6(3));

// OR using template literals, to avoid "+" and spaces

const burpLiteral = num => `Bu${'r'.repeat(num)}p!`;
console.log(burpLiteral(5));

console.log("========== Array, function to eliminate duplicates ==========")

let myArr2 = [1, 1, 1, 1, 2, 3, 4, 6, 6, 6, 6, 6, 8, 8, 8, 9, 0];

let noDuplicate = function () {
    return [...new Set(myArr2)];
};
console.log(noDuplicate());

// OR ES6
noDuplicateES6 = () => [...new Set(myArr2)];
console.log(noDuplicateES6());

console.log("========== Sentence string, covert to array, reurnt count element in the new array =========")
let countWords = 'Just an example here move along';
let spliting = () => countWords.split(" ");
console.log(spliting() + " and the count is " + spliting().length);

// 1. Word ending - Create a function that adds a string ending to each member in an array.
var end = 'ly';
var arr = ['clever', 'meek', 'hurried', 'nice'];
const addEnding = () => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i] + end;
    }
    return result;
};
console.log(addEnding());

//2. Using .map()
function addEndingV2() {
    return arr.map(word => `${word}${end}`);
}
console.log(addEndingV2());

//3. ES6 function with .map()
const addEndingV3 = () => arr.map(word => `${word}${end}`);
console.log(addEndingV3());

//  Basic "for" loops====================================================================================================
var myArray = ['A', 'B', 'C', 'D'];
for (var i = 0; i < myArray.length; i++) {
    const loop = 'The member of myArray in the index ' + i + ' is ' + myArray[i];
    console.log(loop);
}

// =========================================================================================================================

// Practicing with .splice()

let myName = 'Jose Leonardo Fernandez Arellano';
let splittingMyName = myName.split(' ');
console.log(splittingMyName);
let myNewNameArr = splittingMyName;
console.log(myNewNameArr);
// If removed then it will show a new array with removed elements
console.log(myNewNameArr.splice(2, 2, 'Hola', 'Bananas'));
// Here original array IS MODIFIED with reminders elements and added new element at the end.
console.log(splittingMyName);

// Create a function which takes a sentence and returns its abbreviation.
// Get all of the words over or equal to n characters in length and return the first letter of each,
// capitalised and overall returned as a single string.

var n = 4;
let sentence = 'What is the best approach to abbreviate this sentence';
let splitSentence = sentence.split(' ');
console.log(splitSentence);

const remLessThan4CharWords = splitSentence.filter(words => words.length >= n);
console.log(remLessThan4CharWords);

function abbreviation() {
    return remLessThan4CharWords
        .map(abbreviate => abbreviate[0].toLocaleUpperCase())
        .join('');
}
console.log(abbreviation());

console.log(
    '=======Reverse string, spliting, and join, with try/catch, if passing number then catch error=============='
);

let s = '12345';
let reversingString = function () {
    try {
        let reversed = s.split('').reverse().join();
        console.log(reversed);
        console.log(s);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
};
reversingString();
