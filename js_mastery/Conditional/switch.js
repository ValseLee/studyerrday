// switch (conditional Statement)

// 정해진 범위 값에 대한 특정 일을 수행할 때 스위치 문을 사용

let day = 6; // 0: 월요일, 1: 화요일 ... 6: 일요일
let dayName;

// if 문으로 작성하면 매우 식이 길어질 거야
// 그럴 때는 스위치를 써보면 어떨까?

switch(day) {
    case 0:
        dayName = '월요일';
        break
    case 1:
        dayName = '화요일';
        break
    case 2:
        dayName = '수요일';
        break
    case 3:
        dayName = '목요일';
        break
    case 4:
        dayName = '금요일';
        break
    case 5:
        dayName = '토요일';
        break
    case 6:
        dayName = '일요일';
        break
}

console.log(dayName);

// break를 잘 써주는 게 중요하다
let condition = 'OK';
let text;
switch(condition) {
    case 'OK':
    case 'good':
        text = 'Yes';
        break;
    case 'bad':
        text = 'NO';
        break;
    default:
        console.log('조건에 해당하지 않음');
}

console.log(text);