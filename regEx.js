// repleace a character in a string
function replacing(str) {
    return str.replace(/-/g, '_')
}
console.log(replacing('Jose-Leonardo-Fernandez-Arellano'), "\n")

// "Create a zipcode from a string or numbers, removing special characters, white spaces"
let zipCode = "759  * 2 ^ 5";
const result = function () {
    let zipCodeNoSpaceNoLetters = zipCode.replace(/[\D\s+]/g, "");
    let toNum = zipCodeNoSpaceNoLetters;
    console.log(toNum.length)
    if (toNum.length !== 5) {
        return false
    }
    else if (toNum.length === 5) {
        return Number(toNum)
    }
}
console.log(result(), "\n")

console.log("========== RegEx look in a string for digit and non-digit ==========")

let intro = "Hello I'm 40 years old, born in 1979";
dFind = () => console.log(intro.match(/\D/g).join(""));
dFind();
Dfind = () => console.log(intro.match(/\d/g), "\n");
Dfind()


let myString = "jose leonardo. fernandez arellano, 1979 semi-developer?"

const howManyWords = () => {
    let myStrSplit = myString.replace(/[0-9\,\.\?]/g, "").split(" ")
    console.log(myStrSplit)
}
howManyWords()

//remove special characters except _ and - and spaces
let specialChar = "Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???"
const remChar = () => {
    return specialChar.match(/(\w|\s|\-)/g).join("")
}
console.log(remChar())

let word = "my pyx"
const getVowels = () => {
    let count = 0;
    let vowels = word.match(/[aeou]/g);

    if (vowels == null) {
        return 0
    } else {
        count = + vowels.join("").length
        return count
    }
}
console.log(getVowels())

console.log(typeof 12)

