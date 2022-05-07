// 접근제어자 - Capsulize
// 리턴 된 인스턴스가 수정되지 않도록 하고 싶다면
// private(#) -> 내부 접근 가능, 외부 접근 불가능
// #field 는 외부 접근 불가!!!
// 함수도 #을 붙이면 외부에서 호출할 수 없다.

class Fruit{
    #name; // from outside, skip is possible
    #emoji; // from outside, skip is possible
    #type = '과일'; // field 

    constructor(name, color) {
        this.#name = name;
        this.#emoji = color;
    };

    // instance level method
    #display = () => {
        console.log(`${this.#name} is ${this.#emoji}`);
    }; 
};

const APPLE = new Fruit('apple', 'red');
console.log(APPLE);
APPLE.name = 'Orange';
APPLE.#display();