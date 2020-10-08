// JS arry classic vs Destructuring
let name = ['Leo', 'Fernandez'];
console.log(name[0] + ' ' + name[1]);

// ======================================
let fullName = ['Lenny', 'Fernandez'];
let [firsName, surName] = fullName;
console.log(firsName + ' ' + surName);
console.log(surName);
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
    call: "Arya Stark",
    parents: ["Tywin Lannister", "Joanna Lannister"]
};
const aryaParents = arya.parents;
console.log(arya.call)
console.log(aryaParents)

const { call, parents } = arya
console.log(call)