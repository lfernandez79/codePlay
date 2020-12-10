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

let xmasEveDate = date => {
    if (date.getMonth() === 11 && date.getDate() === 24)  {
        return true;
    } else {
        return false;
    }
}
console.log(xmasEveDate(new Date(2020, 11, 24)))

// isMath = math => {
//     return math === 0 ? true : math;
// }

let num = eval("(0 / 0)");
const isInfinityNum = () => {
  return !isFinite(num)
}
console.log(isInfinityNum())
