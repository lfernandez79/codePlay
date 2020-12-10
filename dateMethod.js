console.log(
    '=============================Date Method - substracting days==================================='
);
const date = new Date(2009, 10, 20);
date.setDate(date.getDate() - 3);
console.log(date.toString());

const c = new Date(2017, 1, 1); // 1 Feb -> 30 Jan
c.setDate(c.getDate() - 2);
console.log(c.toString());
console.log(new Date().toISOString().slice(0, 10));

let xmasEveDate = new Date()
console.log(xmasEveDate)