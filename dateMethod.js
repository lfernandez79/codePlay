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

let decimal = 7.259
console.log(Number(decimal.toFixed(2)))


function ohmsLaw(v, r, i) {
    if (v === "" && r === "") {
        return "Invalid";
    } 
    else if (v === "") {
        return parseFloat((r * i).toFixed(2));
    } 
    else if (r === "") {
        return parseFloat((v / i).toFixed(2));
    } 
    else if (i === "") {
        return parseFloat((v / r).toFixed(2));
    } 
    else { 
        return "Invalid"; 
    }
}
console.log(ohmsLaw(12, 220, ""))
console.log(ohmsLaw(230, "", 2))
console.log(ohmsLaw("", "", 10))
console.log(ohmsLaw(100, 20, 10))


