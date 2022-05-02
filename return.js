// return
// 모든 리턴이 명시되지 않은 함수의 기본 리턴 값은 'undefined'이다
function add(a,b) {
    return a + b;
}

const result = add(1,2);
console.log(result);

// 값 리턴 없이 행동만 하는 함수라면 굳이 리턴 값을 명시하지 않아도 된다.
function print(text) {
    console.log(text);
}

print();

function print2(num) {
    if(num < 0) {
        return;
    } // 함수 내에서 num을 돌리기 전에, 함수 수행에 적합한 조건인지 유효한지 검사하고
    // 적합하지 않다면 리턴 하여 함수를 종료시킬 수 있다.
    console.log(num);
}

console.log(print2(20)); // return 값이 없어서 콘솔 로그 === undefined
console.log(print2(-12));