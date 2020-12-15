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