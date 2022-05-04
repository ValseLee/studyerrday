// 매개변수(parameters)
// 기본 값은 undefined
// 매개변수의 정보는 함수 내부에서 접근 가능한 arguments 객체에 저장된다.

function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b;
}

add(1, 2, 3);

// parameter에 기본값을 정해줄 수도 있다. === default Parameters
// undefined 일 때만 적용된다.
function sum(a = 1, b = 2) {}

// Rest 매개변수? Rest Parameters
// 매개변수가 얼마나 필요한지 가늠되지 않을 때 spread operator로 표기
function sum2(a, b, ...numbers) {
  console.log(numbers);
  console.log(a ,b);
}

sum2(1, 2, 3, 4, 5, 6, 7, 8, 9);
sum2(1, 2);
