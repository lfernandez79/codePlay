// json methods toJSON
let person = {
    name: 'Cecelia',
    lastName: 'Fernandez',
    age: 6,
    school: 'Bridlewood Elementary',
    isAdult: false,
};

let convertToJSON = JSON.stringify(person, null, 2);
console.log(typeof convertToJSON);
console.log(convertToJSON);

let jsonToOnject = JSON.parse(convertToJSON);
console.log(jsonToOnject);