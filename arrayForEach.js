let colors1 = ["amarillo", "rojo", "negro", "violeta", "azul", "naranja"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

colors1.forEach(function (color) {
    console.log("This is my favorite color: " + color)
    console.log("**********************************")
})
// ***************************************************
numbers.forEach(function (num) {
    if (num % 3 === 0) {
        console.log(num)
    }
})

// or a while loop
var count = 0;
while (count < colors1.length) {
    console.log(colors1[count])
    count++
}


console.log("=================find index of any element, add new element to array================");
let friends = ['charlie', 'liz', 'David', 'Mattias', 'Leo'];
console.log(friends);
console.log(friends[0]);
friends[5] = 'Lenny';
console.log(friends);

console.log("==================//Creating an array with a fuction, not very common================");
let friendsArray = new Array('charlie', 'liz', 'David', 'Mattias', 'Leo');
console.log(friendsArray);

console.log("==================//push add an item  to the end of the array========================")
friends.push('Jose');
console.log(friends);

console.log("==================// pop will remove last item from the array=========================")
friends.pop();
console.log(friends);

console.log("==================// unshift add item to the front of an array========================")
friends.unshift('Pepe');
console.log(friends);

console.log("===================// shift remove the first item in an array========================")
friends.shift();
console.log(friends);

console.log("====================// indexOf find(s the index of an itemin an array===================")
console.log(friends.indexOf('Mattias'));

console.log("=====================// slice copies part of an array (start, end)=======================")
let arraySlice = friends.slice(3, 5);
console.log(arraySlice);

console.log("=====================// nested array===========================")
let nestedArray = [
    ['item', 'hello', 'no', 'dont'],
    ['si', 'Lenny', 'please', 'new'],
    ['code', 'react', 'soon', 'complex'],
];
console.log(nestedArray[1][0]);
console.log(nestedArray[2][2]);

console.log("// arry intersection")
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 6, 7, 8];

let intersection = arr1.filter(sameNums => arr2.includes(sameNums));
console.log(intersection);

console.log("// arr find odd numbers");

for (let i = 2; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log('// Using for "of" loop');
for (x of arr1) {
    if (x % 2 !== 0) {
        console.log(x);
    }
}

console.log("// Find a number in the array")
let arr3 = [8, 9, 7, 2, 3]
const findNumber = (n) => {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === n) {
            return "YES, " + n + " number exists in the array and index is " + [i]
        }
    }
    return "NO, " + n + " number does not exist"
}
console.log(findNumber(3));


console.log("=============forEach to find element's index============================")

arr3.forEach(function (element, index) {
    console.log(`${element} comes at index ${index}`)
})

arr3.forEach((e, i) =>
    console.log(`${e} it's index location is at ${i}`)
);

console.log(arr3.filter(e => e !== 9 && e !== 2))
console.log(arr3.map((e, i) => e * 10))


console.log("========= area of triangule ===========")


function areaT(x, y) {
    return [(x[0] + y[0]), (x[1] + y[1]), (x[2] + y[2])]
}
console.log(areaT([0, 3, 6], [0, 3, 0])) + "\n"


console.log("what indices in the array add up to target")
let arrayToFindTarget = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 15;

const sumTwoNum = () => {
    let leftNum = 0;
    let rigthNum = arrayToFindTarget.length - 1;
    let result = [];
    
    while (leftNum < rigthNum) {

        let sum = arrayToFindTarget[leftNum] + arrayToFindTarget[rigthNum];
        console.log(arrayToFindTarget[leftNum], arrayToFindTarget[rigthNum],  " " + "result: " + sum)
        
        if (sum === target) {
            return [arrayToFindTarget[leftNum], arrayToFindTarget[rigthNum]]; 
        }
        else if (sum > target) {
            rigthNum--;
        } 
        else {
            leftNum++;
        }
    }
}
console.log(sumTwoNum());
