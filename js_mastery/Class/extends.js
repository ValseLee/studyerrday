class Tiger {
    constructor(color) {
        this.color = color;
    };
    eat() {
        console.log('eat');
    };

    sleep() {
        console.log('sleep');
    };
};

class Dog {
    constructor(color) {
        this.color = color;
    };
    eat() {
        console.log('eat');
    };

    sleep() {
        console.log('sleep');
    };

    play() {
        console.log('play');
    };
};

// too long if you dont use 'extends'

class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('eat');
    };
    sleep() {
        console.log('sleep');
    };
}

class Bird extends Animal {};
const BIRD = new Bird('Yellow');
console.log(BIRD);
BIRD.eat();

// extends 는 중복을 줄여준다.

class Cat extends Animal {
    constructor(color, name) {
        super(color); // 부모 클래스에서 이미 선언되어 있는 생성자를 꼭 전달해주어야 한다.
        // 플러터의 문법을 떠올려
        this.ownerName = name;
    };

    play() {
        console.log('cat Plays');
    };

    // @overiding
    eat() {
        console.log('cat eats diff')
    }

    // @overiding + additional behave
    sleep() {
        super.sleep();
        console.log('and looks so cute')
    }
}

const CAT = new Cat('Stripe','Valse');
console.log(CAT);
CAT.play();
CAT.eat();
CAT.sleep();