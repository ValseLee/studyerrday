// Data Type 에 포함되는 복합 데이터인 객체와 함수!
// 키와 밸류로 만드는 객체. 밸류는 원시값과 객체값을 모두 가질 수 있다
// 객체는 힙에 저장되고, 객체가 할당된 변수는 힙을 가리킨다.
// 객체는 서로 연관된 속성(데이터=프로퍼티), 행동(함수=메소드)을 묶어주기 위해 활용된다.
// 거진 클래스를 위한 설명


// obj는 이렇게 만들 수 있다.
// 1. Object Literal { key: value};
// 2. new Object();
// 3. Object.create();

// key : 문자, 숫자, 문자열, 심볼
// value : 원시값, 객체(함수)

let apple = {
    name: 'apple',
    'hello': 'hi',
    0: 1,
    ['hello-bye1']: 'hibyeyeah',
};

// 속성 접근
// object.key = dot notation
// object[] = bracket notation
console.log(apple.name);
console.log(apple['name']);
console.log(apple['hello-bye1']);

// 속성 추가
apple.emoji = 'Tada';
console.log(apple.emoji);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji); // undefined