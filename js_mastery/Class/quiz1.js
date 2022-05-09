// counter 구현
// 1. 0 이상의 값으로 초기화
// 2. 하나씩 증가

class Counter {
    #number;
    #sum;
    #initializer;

    constructor(inputNumber) {
        inputNumber < 0 || isNaN(inputNumber)
        ? this.#number = 0
        : this.#number = inputNumber;
        
        this.#sum = this.#number;
        this.#initializer = inputNumber;
    };

    initialize() {
        this.#sum = this.#initializer;
        return this.#sum;
    };

    add() {
        if(this.#sum === this.#number) {
            this.#sum = this.#number + 1;
        } else {
            this.#sum++;
        }
        return this.#sum;
    };

    printValue() {
        console.log(this.#sum);
    }
};

const COUNTER = new Counter(5);
console.log((COUNTER.initialize()));

COUNTER.add();
COUNTER.add();
COUNTER.add();
COUNTER.add();
COUNTER.printValue();

console.log((COUNTER.initialize()));
COUNTER.add();
COUNTER.add();
COUNTER.printValue();