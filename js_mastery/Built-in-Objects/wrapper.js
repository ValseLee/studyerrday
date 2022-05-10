// Runtime 환경의 Host Objects가 필요
// 브라우저의 경우, Browser APIs
// Node환경의 경우, Node APIs
// 그리고 User-defined Objects도 있다

const number = 123; // 원시 타입
// 아래처럼 함수를 호출하는 순간 number 타입을 감싸는 Number객체로 감싸게 된다.
console.log(number.toString()); 
// 원시값 number에 적용할 수 있는 다양한 함수가 있다.
// 내가 정의한 함수가 아닌, wrapper 객체에서 따온 메소드.

// wrapper 객체
// 원시 값을 필요에 따라 관련된 빌트인 객체로 '변환'한다.

// 평소에는 원시타입이다가, 메소드 호출이 진행되는 시기에 원시타입을 감싸는 객체로 변환

const text = 'text';
console.log(text);
console.log(text.length); // 객체 타입
console.log(typeof(text.length)); // 객체 타입
console.log(text.trim()); // 객체 타입