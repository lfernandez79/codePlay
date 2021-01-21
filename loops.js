// Try edit message

var counter = -10
while (counter < 11) {
    console.log(counter)
    counter++
}

console.log("Print name until name.lenght is reached")
var name = 'JoseLeonardo';
let count = 0
console.log(name.length)
while (count < name.length) {
    console.log(name)
    count++
}

console.log("print each index of name on separate lines")
for (let i = 0; i < name.length; i++) {
    console.log(name[i])
}

console.log('PRINTING ALL NUMBERS BETWEEN -10 AND 19')

for (var i = -10; i < 20; i++) {
    console.log(i)
}

console.log('PRINTING ALL EVEN BETWEEN 10 AND 40')

// for(var i = 11; i <= 40; i += 2){
// 	console.log(i);
// }

for (var i = 10; i <= 40; i += 1) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log('PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333')

for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

console.log('PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50')

for (var i = 5; i <= 50; i++) {
     if(i % 5 === 0) {
         console.log(i) 
     } 
     else if(i % 3 === 0){
         console.log(i)
     }
}