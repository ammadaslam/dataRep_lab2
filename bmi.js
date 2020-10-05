class BMI {

    // Constructor with arguments
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    //method
    calculateBMI() {

        let bmi = this.weight / (this.height ** 2);
        return bmi;

    }




}
//instance of BMI Class
let MyBmi = new BMI(2,90);
let resultBMI = MyBmi.calculateBMI();
console.log(resultBMI);