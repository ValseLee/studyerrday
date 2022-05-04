let a = 0;

a = 1;

let b;

b = 2;

// Data Type
// 원시 타입과 객체 타입이 있다. 
// number, string, boolean, Symbol vs object(array), function, class, etc

// number
let integer = 123; // 정수
let negative = -123; // 음수도 가능
let double = 1.23; // 실수

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(0 / 123); // 0
console.log(123 / 0); // infinity
console.log(123 / -0); // -infinity
console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 1234567890123456789012345678901234567890n;

// string

let string = '안녕하세요';
string = '안녕!';
string = '"안녕!"'
string = '안녕\n엘리야!';
string = '안녕!\n엘리야!\t\t내이름은\\\u09AC';

// 템플릿 리터럴
let id = 'Valse';
let greetings = "'안녕!, " + id + "😀\n 반가워"
greetings = `'안녕, ${id} 반가워`;
console.log(greetings)

// boolean
let isTrue = true;
let isFalse = false;

// falshy
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// true
console.log(!!1);
console.log(!!-1);
console.log(!!'Text');
console.log(!!{});
console.log(!!Infinity);

// empty, null, undefined

let variable;
variable = null;

console.log(variable);

let activeItem; // 활성화된 뭔가가 있는지, 없는지 모름
activeItem = null;  // 활성화된 게 '없음'
console.log(typeof null); // null === type(object);
console.log(typeof undefined); // undefined === type(undefined);
console.clear();

// object
// 객체는 여러 데이터를 함께 묶어둔 것 => {key:value}
// value에는 원시 데이터, 객체 데이터 전부 할당 가능

let a = 123; // 메모리 셀에 값 자체가 저장된다. 원시 타입은 데이터나 스택에 저장된다.
let apple = {
    name:'apple',
    color: 'red',
    display: 'Ym',
}; // 객체 타입은 heap에 할당된다. 처음부터 크기가 정해져 있지 않아서. 동적 데이터가 저장되는 장소가 바로 heap
// heap에는 객체의 주소가 저장되어 있고, 변수로 선언된 apple은 (이 놈은 원시 타입) 바로 이 객체의 주소를 가리킨다
// 그래서 우리는 apple.name 이라는 식으로 작성하는 거야. apple의 메모리 주소를 찾고, 메소드인 key를 찾아서 value를 불러온다.

let orange = {
    name: 'orange',
    color: 'orange',
    display: '00',
}