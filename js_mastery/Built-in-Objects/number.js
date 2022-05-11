// 숫자는 클래스로 인스턴스로 찍어낼 수 있다.
const num1 = 123;
const num2 = new Number(123); // 전에도 말했듯 굳이 필요하지 않은데 이렇게 하면 메모리 누수가 발생

console.log(num1);
console.log(num2);
console.log(typeof num2);

// 정수의 최대값
console.log(Number.MAX_VALUE);
// e + 308 === 10의 308 거듭제곱
// 이렇게 큰 수는 언제 쓰게 될까?

if(num1 === Number.NaN){
}
if(Number.isNaN(num1)){
}

// 지수표기법 (매우 크거나 작은 수를 표기할 때)
const num3 = 102;
console.log(num3.toExponential());
// 1.02 * 10 * 10 = 1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 숫자를 아랍어로 변환할 수도 있다

// 원하는 자릿수까지 유효하게 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(3)); // 지수표기법으로 전환되는 시점

// 입실론
// 0과 1사이에서 나타낼 수 있는 가장 작은 수
console.log(Number.EPSILON); 

if(Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; // 딱 봐도 0.1 같겠지만..
console.log(num);
// 우리는 10진수로 계산해도 JS 는 바이너리로 계산한다.
// 비트 연산한 후에 십진수로 전환될 때 정확하게 부동소수점까지 계산되질 않는다.
// 이런 작은 오차를 나타내는 게 Epsilon

function isEqual(original, expected) {
    return original === expected;
}
console.log(isEqual(1,1));
console.log(isEqual(0.1,0.1));
console.log(isEqual(num, 0.1));
// num이 0.1 ~ 3 이라서.. 
// 이렇게 작은 차이를 무시하고 싶다면?

function isEqualAnother(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqualAnother(num, 0.1));
// Math.abs 는 절대값 처리