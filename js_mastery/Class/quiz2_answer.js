class Employee {
    constructor(name, depart, monthlyWorkHour, payRate) {
        this.name = name;
        this.depart = depart;
        this.monthlyWorkHour = monthlyWorkHour;
        this.payRate = payRate;
    }
    wageCalculator() {
        this.payWage = this.monthlyWorkHour * this.payRate;
        this.totalWage = Intl.NumberFormat().format(this.payWage);
        return this.totalWage+" 원";
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, depart, monthlyWorkHour) {
        super(name, depart, monthlyWorkHour, FullTimeEmployee.PAY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000
    constructor(name, depart, monthlyWorkHour) {
        super(name, depart, monthlyWorkHour, PartTimeEmployee.PAY_RATE);
    }
}

const VETIVER = new FullTimeEmployee('베티버','B2C', 30);
const BOB = new PartTimeEmployee('밥','B2C', 20);

console.log(VETIVER.wageCalculator());
console.log(BOB.wageCalculator());

