console.log("// ========== Anagrams ==========");
const validAnagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return;
    }

    let obj = {};
    for (let i = 0; i < string1.length; i++) {
        let letter = string1[i];
        // if letter exist, increment +1, otherwise set to 1
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }

    let obj2 = {};
    for (let i = 0; i < string2.length; i++) {
        const letter2 = string2[i];
        // if can't find letter in or letter is zero then it is not an anagram
        obj2[letter2] ? obj2[letter2] =+ 1 : obj2[letter2] = 1
    }
}
validAnagram("lenny", "lenny")

const countStr = (str) => {
    let myObj = {};
        let splitStr = str.split("");
        splitStr.forEach((letter, i) => {
            myObj[letter] ? myObj[letter] += 1 : myObj[letter] = 1;
        });
        return myObj
}
console.log(countStr("abaabb"))


