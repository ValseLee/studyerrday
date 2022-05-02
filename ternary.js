// terneary
// condition ? expression(true) : expression(false)

let fruit = 'orange';

if (fruit === 'orange') {
    console.log('오렌지');
} else {
    console.log('?');
}

// ternary examples 

fruit === 'apple'
    ? console.log('apple')
    : console.log('nope');

let emoji = fruit === 'apple'
    ? '사과'
    : '아니야';
console.log(emoji);

// 삼항연산자를 활용하면 변수에 조건에 따라 서로 다른 값을 할당해 줄 수 있다. 똑딱이 쓰위치 같군

// 이런 것도 가능

let num = 2;
// num 숫자가 짝수라면 Thumbs up, 아니라면 Thumbs Down.

// 1. if statement
if (num % 2 === 0) {
    console.log('Thumbs Up');
} else {
    console.log('Thumbs Down');
}

// 2. Ternary
num % 2 === 0
    ? console.log('Thumbs Up')
    : console.log('Thumbs Down');

// 2. Ternary +

let emoji2 = num % 2 === 0
    ? 'Thumbs Up'
    : 'Thumbs Down'

console.log(emoji2);