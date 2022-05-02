// function Quiz
// 주어진 숫자만큼 0부터 순회
// 순회하면서 주어진 일을 수행

// 5, 순회하는 숫자를 전부 출력
// 5, 순회 숫자의 2배 값을 출력

function iterate(maxNum, action) {
    let result = action(maxNum);

    for(let i = 0; i <= maxNum; i++) {
        
    }

    return result;
}

const print = (maxNum) => maxNum;
const printDouble = (maxNum) => maxNum*2;

iterate(5, print);
// iterate(5, printDouble);