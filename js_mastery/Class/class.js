// class - Instance(=Object) creator
// how can we make object?

// function Fruit(name, color) {
//     this.name = name;
//     this.emoji = color;
//     this.display = () => {
//         console.log(`${this.name} is ${this.emoji}`);
//     };
//     return this; // you can skip this return
// };

class Fruit{
    constructor(name, color) {
        this.name = name;
        this.emoji = color;
    }; // 생성자 '함수' 내에서만 this를 통해 인자를 할당할 수 있다.

    display = () => {
        console.log(`${this.name} is ${this.emoji}`);
    }; // Class 내부의 함수는 보통 생성자(constructor) 밖에서 생성한다.
    // 이때, function 선언은 하지 않는다.
    // 이렇게 화살표 함수를 쓰고 이름에 할당해주자.
};

const APPLE = new Fruit('apple', 'red');
console.log(APPLE);
APPLE.display();

/// APPLE 객체는 Fruit 클래스의 인스턴스이다.
// class 내부의 키와 밸류는 인스턴스 레벨의 프로퍼티와 메소드이다.
// 일반 객체는 클래스의 인스턴스가 아니야.