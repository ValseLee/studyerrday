// function Quiz
// 주어진 숫자만큼 0부터 순회
// 순회하면서 주어진 일을 수행

// 5, 순회하는 숫자를 전부 출력
// 5, 순회 숫자의 2배 값을 출력

function iterate(maxNum, action) {
    for (let i = 0; i <= maxNum; i++){
        console.log(action(i));
    }
}

const print = (numLimit) => numLimit;
const printDouble = (numLimit) => numLimit * 2;

// const print2 = (number) => {
//     for(let i = 0; i <= number; i++) {
//         console.log(i);
//     }
// }

// const printDouble2 = (number) => {
//     for(let i = 0; i <= number; i++) {
//         console.log(i * 2);
//     }
// }

iterate(5, print);
iterate(5, printDouble);