// expressions
// 함수 선언문은 지금껏 익숙하게 해왔다. function name() {};
// 함수 표현식(함수가 값으로 표현되도록)은?
// const name = function () {};
// 함수가 객체이기 때문에 
// expression.js
// function name() { } // 선언
// const a = function() { } // 표현식
let add = function(num1, num2) {
    return num1 + num2;
}

console.log(add(1,2));

let add2 = function sum(num1, num2) {
    return num1 + num2;
}

// console.log(sum(1,2)); // 함수 표현식의 함수에 이름을 지어줄 수는 있으나 외부에서 접근은 불가능
// error message : sum is not defined

// arrow function
ARROW = (a,b) => {
    return a+b;
};

console.log(ARROW(1,2));

// 값만 리턴하는 함수는 괄호와 리턴 생략이 가능하다.
ARROW2 = (a,b) => a + b;
console.log(ARROW2(1,3));


// 생성자 함수 const object = new Function(); // 객체에서 학습

// IIFE (Immediately-Invoked FUnction Expressions)
// 함수를 소괄호로 묶고나서 다시 함수로 호출하면 '값'을 호출할 수 있다.
(function run() {
    console.log(3);
})();
