class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}
// instance of Vehicle class
//let myVechile = new Vehicle('VW', 'Golf', 2020);
//let info = myVechile.Information();


// Create Child Class called Cars

class Cars extends Vehicle {

    // constructor with extra Door argument

    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;

    }
    Information() {
        super.Information();
        console.log(`Doors: ${this.doors}`);


    }


}

// Create Instance of Cars Class

let myCar = new Cars('VW', 'Golf', 2020, 5);
myCar.Information();