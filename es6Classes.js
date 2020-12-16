// Original ES6 class

class Car {
    constructor(brand, color) {
        this.carname = brand;
        this.carcolor = color;
    }
    // This is my method in Car class
    iOwn() {
        // return "I own this " + this.brand + " car! " + "and the color is: " + this.color;
        return `I love this ${this.carname} car, color ${this.carcolor} my favoite`
    }
}

// We are creating another class that will inherits the methods from the "Car" class above using the "extends keyword"
class Model extends Car {
    constructor(brand, color, model) {
        super(brand, color);
        this.carmodel = model
    }
    show() {
        return `${this.iOwn()}, the model is ${this.carmodel}`
    }
}

// We are creating another class that will inherits the methods from the "Model" class above using the "extends" keyword
class Engine extends Model {
    constructor(brand, color, model, engine) {
        super(brand, color, model);
        this.carengine = engine;
    }
    carEngine() {
        return `${this.show()} with ${this.carengine} cylinders engine`
    }
}


myCar = new Car("VOLVO", "black");
console.log("1 " + myCar.carname);
console.log("2 " + myCar.iOwn() + "\n");

// Calling my new Model class
myCar = new Model("VOLVO", "black", "S60");
console.log("3 " + myCar.show())

// Calling last class Engine
myCar = new Engine("VOLVO", "black", "S60", 4);
console.log("4 " + myCar.carEngine() + "\n")

const currentJob = {
    yourName: "Lenny",
    jobTitle: "none yet", 
};
console.log(currentJob)

const studing = {
    ...currentJob,
    what: "coding",
    specialty: "reactjs",
}
console.log(studing)

const multiplication = (...nums) => {
    return nums.filter(n => n > 100)
}
console.log(multiplication(10, 100, 500, 1000, 20, 30))

// Destructuring using "for of" loop
let names = [];
let people = [
    {
        myName: "Leo",
        family: {
            wife: "Guera",
            daugthers: {
                child1: "Isabella",
                child2: "Cecelia"
            },
            pet: "Dog gracie",
        },
        age: 41,
        myBrother: "Abraham"
    },
];

for (const { myName: L, family: { wife: w, daugthers: { child1: i, child2: c }, pet: g }, age: a, myBrother: b } of people) {

    console.log(`My name is ${L}, my wife's name is ${w}.\n I have two girls, their names are ${i} and ${c}. I also have a dog ${g} and finally I'm ${a} years old`)
    names.push(L, b);
    console.log(names)
}