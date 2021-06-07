let coders = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

const findSeniorCoder = () => {

    let pickSenior = Math.max(...coders.map(coder => coder.age))
    let maxAge = coders.filter(user => user.age === pickSenior);
    return maxAge
}
console.log(findSeniorCoder());

let arr = [1];
const reducer = () => {
    if (arr.length === 0) {
        return "even"
    }
    let sum = arr.reduce((acc, cur) => acc + cur)
    return sum % 2 === 0 ? "even" : "odd"
}
console.log(reducer())


let myArray = [2, 2, 2, 2]
const sumEvenIndexes = () => {
    let arr = [];
    myArray.filter((num, i) => {
        if (i % 2 === 0) {
            arr.push(num)
        }
    })
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, 0) * myArray[myArray.length -1]
}
console.log(sumEvenIndexes());

let myStr = "a=1, b=2, c=3, d=4";

const obj = () => {
    let strings = myStr.split(', ');
    let resultObject = {};
    console.log(strings)
    strings.forEach(string => {
        if (string !== '') {
            let [key, value] = string.split('=');
            
            resultObject[key] = Number(value);
        }
    })
    return resultObject;
     }
console.log(obj())