// JS arry classic vs Destructuring
let myName = ['Leo', 'Fernandez'];
console.log(myName[0] + ' ' + myName[1]);

// ======================================
let fullName = ["Jose", 'Leonardo', 'Fernandez', "Arellano"];
let [firsName, midName] = fullName;
console.log(firsName + ' ' + midName);
console.log(midName);
console.log(fullName);

// ========================================
let a, b, rest;
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];
console.log(a + b);
console.log(rest);

// Conditional (ternary) operator
const howOld = age => {
    let drink = age >= 21 ? 'Get a beer' : 'Get some milk baby';
    return drink;
};

console.log(howOld(20));
console.log(howOld(21));

// Object Destructuring
const arya = {
    realName: "Arya Stark",
    parents: ["Tywin Lannister", "Joanna Lannister"]
};
const aryaParents = arya.parents;
console.log(arya.realName)
console.log(arya.parents)

// ES6
const { realName, parents } = arya
console.log(arya)

const betterLogCharacter = ({ realName, parents }) => 
    console.log(realName + "'s parents are: " + parents[0] + " and " + parents[1]);
betterLogCharacter(arya)


let sumAndMulti = (a, b) => {
    return [a + b, a * b];
}
const [sum, multi, division = "No division"] = sumAndMulti(5, 5);
console.log(sum)
console.log(multi)
console.log(division)
