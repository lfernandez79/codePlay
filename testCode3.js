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

let arr = [1, 8];
const reducer = () => {
    if (arr.length === 0) {
        return "even"
    }
    let sum = arr.reduce((acc, cur) =>  acc + cur)
    return sum % 2 === 0 ? "even" : "odd"
}
console.log(reducer())




