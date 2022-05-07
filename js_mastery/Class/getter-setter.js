// 접근자 프로퍼티 (Accessor Property)

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = `${this.lastName} ${this.firstName}`;
    };

    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    };

    set fullName(value) {
        console.log('set', value);
    }
};

const student = new Student('Valse', 'Lee');

console.log(student.firstName);
student.firstName = 'what';
console.log(student.fullName);

// fullName을 함수가 아닌 속성으로 할당하면, firstName이 바뀌어도 fullName이 업데이트 되지 않는다.
// 생성자가 호출된 시점에 fullName을 할당된다. 생성자에서 만들어져도 업데이트되지 않기 때문
// 그래서 업데이트 하려면 함수로 호출

// 그런데 함수 호출과 속성 호출이 표기법이 너무 복잡해
// 그럴때 쓰는 게 접근자 프로퍼티

console.log(student.fullName);
// get : 호출하는 시점에 데이터를 업데이트 되며, 속성처럼 사용될 때!

student.fullname = '와우';
// set : 할당하는 시점에 호출
// 아래에서 업데이트 된다.
console.log(student.fullname);