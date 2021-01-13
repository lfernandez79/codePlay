//How mamy trues you can find in the array, neded value. 

let array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

const howManyTrues = () => {
    return array1.filter(item => {
        if (item == true) {
            return item
        }
    }).length
}
console.log(howManyTrues())

//  You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

let unsortArray = [5, 8, 6, 3, 4];
const sortArray = () => {
    const oddNum = [];
    const evenNum = [];
    const oddNumSorted = [];

    unsortArray.forEach(num => {

        if (num % 2 === 0) {
            evenNum.push(num)
            console.log(evenNum)
        } else {
            
                oddNum.push(num)
                console.log(oddNum)
            
        }
    })
    oddNum.sort((a, b) => a - b)
    
    unsortArray.forEach(n => {
        if (n % 2 === 0) {
            oddNumSorted.push(evenNum.shift())
            console.log(evenNum.shift())
        } else {
            oddNumSorted.push(oddNum.shift())
        }
    });
     return oddNumSorted
}
console.log(sortArray())

