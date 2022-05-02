// 원시 데이터는 값 자체가 메모리 셀에 저장되고, 객체는 참조 값(메모리주소)이 메모리 셀에 저장된다

let a = 1;
let b = a; // copy by value, 원시 데이터는 값 자체가 복사되어 할당된다.
b = 2; // 이렇게 해도 문제가 없다. 값만 그 위에 덮어 쓰면 되니까.

let apple = {
    name:'apple',
}
let orange = apple; // 이러면 어때? 서로 같은 주소 값을 갖게 된다.
// 객체는 메모리셀 안에 레퍼런스가 들어있기 때문에, 레퍼런스를 갖고 가게 된다. Copy by Reference
// orange.name = 'orange';로 할당하면 어떻게 될까??
// 당연히 서로 동일한 값을 갖게 될 거야
// 객체 타입은 참조값 (메모리 주소, 레퍼런스)이 복사되어 전달된다.
console.log(apple);
console.log(orange);
console.clear();

// 상수와 변수, let은 재할당이 가능하지만 const는 아니다.
// 상수는 대문자 + 언더바로 변수 네이밍
const TEXT = 'hi';

const APPLE = {
    name: 'apple',
    color: 'red',
};

console.log(APPLE);
APPLE.name = 'orange';
console.log(APPLE);
// 객체 내의 값을 재할당하는 것은 가능하다!!
// APPLE에 다른 데이터를 할당할 수는 없어도 APPLE 객체의 값을 재할당할 수 있다.
// 상수로 선언된 것은 APPLE의 데이터 주소일 뿐.
// 고급지게 말하면 재할당(reassign)은 불가능하고 변경(Mutable)은 가능하다
console.clear();

// Types
// Java같은 경우에는 정적으로 타입을 명시한다. 그래서 타입에 의한 오류 방지에 편하다
// Js는 값을 할당하는 시점에 동적으로 타입이 지정된다. 


// Naming Variables
// Semantic 해야한다

// 리터럴 : 코드에서 값을 나타내는 표기법
// 123, '123', true(boolean), {}(object), [](array)

// 코드의 최소 실행 단위는 '문'(statement)
// 변수를 선언하면 선언문, 할당하면 할당문, 조건이 있으면 조건문 등등
// 표현식? '문' 중에서도 값으로 평가될 수 있는 문
// 함수 호출도 값으로 반환되기 때문에 function(); 이렇게 해도 함수 호출 표현식이다.
// 각각의 문은 세미 콜론으로 끝나야 한다.
// let b; 이런 선언문은 값으로 반환되지 않기 때문에 그저 선언문

let c; // 선언문
b = 2; // 표현식인 동시에 할당문
// let a = let b; let b는 값을 생성하지 않기 때문에 a에 할당할 수 없기 때문에 에러.

// 산술 연산자 : +,-,*,/,%,**(거듭제곱, es7에서 추가된 문법)
console.log(5 ** 2);
console.log(Math.pow(5,2));
// 두 값은 동일

let text = '두개의' + '문자를';
text = '1' + 1; // 숫자 + 문자열 = 문자열

// 단항연산자(unary)
// +(양), -(음), ! (부정)
let k = 5;
k = -k; //  -1 * 5
console.log(k); // -5
console.log(-k); // 5

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// 숫자가 아닌 타입을 숫자로 변환해보면 어떤 값이 나올까?
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0 
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

// 모든 값을 boolean으로 만들고 싶다?
console.log(!!1);
console.log(!!true);
console.log(!!undefined);

console.clear();
// 증감 연산자
let t = 0;
console.log(t);
t++;
console.log(t);
t--;
console.log(t);

console.clear();
// 증감 연산자의 위치에 따라 값이 달라진다.
// t++; 연산 한 뒤에 값을 증가
// ++t; 값을 먼저 증가시키고 연산 함
// 증감 연산자는 거의 마지막에 작동한다고 보면 된다.

t = 0;
console.log(t++); // 0
// 0이 콘솔에 찍힌 다음에 1이 증가한다
console.log(t); // 1

let y = t++;
console.log(y); // 0
console.log(t); // 2
// 0으로 지정되어 있는 t를 y 할당한 뒤에, t가 1이 된다.
// 할당이 먼저 진행됨

t = 0;
y = ++t;
console.log(y); // 1
console.clear();
// t의 값이 먼저 증가된 후에 할당이 진행됨

// 연산자 우선순위
let aa = 2;
let bb = 3;
let result = aa + bb * 4;
console.log(result); // 14
result = aa++ + bb * 4;
console.log(result); // 14
console.log(aa); // 3
result = (aa++) + bb * 4;
console.log(result); // 15
// 증감 연산자는 진짜 뭔가 이상한데
console.clear();

// 동등 비교 관계 연산자
// == : 값이 같은가?
// != : 값이 다른가?
// === : 값과 타입이 같은가?
// !== : 값과 타입이 모두 다른가?
console.log(2 == 2); // t
console.log(2 != 2); // f
console.log(2 != 3); // t
console.log(2 == 3); // f
console.log(2 == '2'); // t
console.log(2 === '2'); // f
console.log(true == 1); // t
console.log(true === 1); // f
console.log(false == 1); // f
console.log(false === 1); // f

const OBJ1 = {
    name: 'js',
} // 0x110111
const OBJ2 = {
    name: 'js',
} // 0x110112

console.log(OBJ1 == OBJ2); // f
console.log(OBJ1 === OBJ2); // f
// 왜 와이? 객체에는 메모리 주소가 할당되고 두 개가 할당된 메모리 주소가 서로 다르자너 ㅋㅋ

console.log(OBJ1.name == OBJ2.name); // t
console.log(OBJ1.name === OBJ2.name); // t

let obj3 = OBJ2;
console.log(obj3 == OBJ2); // t
console.log(obj3 === OBJ2); // t
// 왜 와이? 동일한 메모리 주소를 갖고 있으니까
