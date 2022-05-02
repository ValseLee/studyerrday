// while(condition) {}
// until condition becomes false 

let num = 5;
while(num >= 0) {
    console.log(num);
    num--;
}

let isActive = false;
let i = 0;

while(isActive) {
    console.log('loop is working');
    if (i === 10) {
        break;
    }
    i++;
}

// while vs do while
// do while 은 1회가 무조건 실행되고, 그 이후에 while condition을 체크한다

do {
    console.log('is working');
} while(isActive) {
    console.log('hmm');
}