console.log("// ========== Anagrams ==========");
const validAnagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return;
    }

    let obj = {};
    for (let i = 0; i < string1.length; i++) {
        let letter = string1[i];
        // if letter exist, increment, otherwise set to 1
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }
    console.log(obj)

    for (let i = 0; i < string2.length; i++) {
        const letter = string2[i];
        // if can't find letter in or letter is zero then it is not an anagram
        !obj[letter] ? false : obj[letter] -= 1
        console.log(letter)
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

