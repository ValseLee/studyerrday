const APPLE = {
    name: 'apple',
    display: function() {
        console.log(`${this.name} is red`);
    },
};

APPLE.display();

const ORANGE = {
    name: 'orange',
    display: function() {
        console.log(`${this.name} is not red`);
    },
};

ORANGE.display();

// .... too many functions

// 생성자 함수는 '대문자'로 시작한다
function Fruit(name, color) {
    this.name = name;
    this.emoji = color;
    this.display = () => {
        console.log(`${this.name} is ${this.emoji}`);
    };
    return this; // you can skip this return
};

const GRAPE = new Fruit('grape', 'purple');
const MELON = new Fruit('melon', 'green');

console.log(GRAPE);
console.log(MELON);
GRAPE.display();
MELON.display();