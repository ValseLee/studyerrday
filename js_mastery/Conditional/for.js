// for Loop Statement
// for(변수 선언; 조건식; 증감식) { }
// 실행순서 : 
    // 1. 변수 선언문 => 변수 초기화
    // 2. 조건식이 참일 때 코드블럭 수행
    // 3. 코드블럭 수행이 끝나면 증감식 수행
    // 4. 조건식이 거짓이 될 때까지 1-3 반복

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 5; j++) {
        console.log(i,j);
    }
}

// 무한 루프
//for(;;) { // 조건도 증감도 언제나 참이니까 코드블럭이 끝없이 돈다 };

//  반복문 제어 : continue, break;

for(let i = 0; i < 11; i++) {
    if(i === 10) {
        console.log('i reaches 10');
        continue; // if you wanna skip below step and go back to for loop condition
        break; // if you wanna stop this for loop at 10
    }
    console.log('not yet');
}