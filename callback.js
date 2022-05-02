// Callback // 나중에 호출해 줄게

// first-class object, function : 일반 객체처럼 모든 연산 가능
    // 매개변수 가능, 반환값 가능, 할당 명령문 가능, 동일비교대상
    // => 객체, 함수
    // Java, Swift, Kotlin, Python

// 고차함수 Higher-order funciton
    // 인자로 함수를 받거나(콜백함수)
    // 함수를 반환하는 함수 

const add = (a,b) => a + b;
const multiply = (a,b) => a * b;

// 전달된 aciton은 콜백함수이다.
// 전달 시점에는 함수를 호출해서 반환된 값을 전달하지 않고
// 함수의 레퍼런스(참조값)가 전달 되는 것
// add나 multiply 함수는 calculator 고차함수 내에서 필요할 때(나중에) 호출된다.
function calculator (a,b, action) {
    if(a< 0 || b < 0){
        return;
    }
    let result = action(a,b);
    console.log(result);
    return result;
}

calculator(1, 2, add); // 함수를 호출하지 않고 이름만 매개변수로 전달
calculator(1, 2, multiply); // 함수를 호출하지 않고 이름만 매개변수로 전달
calculator(-1,-1, add); // <- 이 경우, if 조건에 걸리기 때문에 function 이 작동하지 않고, log에도 찍히지 않는다.