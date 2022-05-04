// function

function add(num1,num2) {
    const result = num1 + num2;
    return result;
}

console.log(add(1,2)); 
// 함수 이름은 함수 메모리가 담겨 있는 주소를 가리킨다.
// = 함수 이름은 함수를 참조하고 있다.

// another example
let lastName = 'kim';
let firstName = 'Koral';
let fullNameLog = `${lastName} ${firstName}`;
console.log(fullNameLog);

// but what if there are too many people

function fullName(lastName, firstName) {
    return `${lastName} ${firstName} Hi`;
}

console.log(fullName('kim', 'kally'))