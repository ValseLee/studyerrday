// 사용성을 확인하며 답을 써보자

class Counter {
    #value;
    constructor(startValue) {
        if(isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value;
    };

    increment = () => {
        this.#value++;
    }
};

const COUNTER = new Counter(0);
COUNTER.increment(); // 1
COUNTER.increment(); // 2
console.log(COUNTER.value); // value at this moment
