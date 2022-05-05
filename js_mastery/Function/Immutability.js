// = unchangable
// 상태가 변경되지 않도록 불변성을 유지하는 방식으로 코드를 작성하는 것이 좋다!

function display(integer){
    // integer = 5;
    console.log(integer);
}
const VALUE = 4;
display(VALUE);

// VALUE 는 4이지만, 함수에 인자로 전달되는 순간, integer에 의해 4로 수정할당.
// 함수내부에서 외부로부터 주어진 인자 값을 변경하는 식으로 코드를 작성하면 매우 곤란하다.
// 상태 변경이 필요하면, 새로운 상태를 만들어서 반환해야 한다.
// 원시 값은 값에 의한 복사지만.. 객체 값은 참조 값을 복사한다는 점을 유의

// ----

function displayObj(obj) {
    // obj.name = 'who are you?';
    console.log(obj);
};

const VALSE = {
    name: 'Valse',
};

displayObj(VALSE);
console.log(VALSE);
// 동일한 메모리 주소를 참조하는 모든 변수가 업데이트 되어버리는 큰 문제가 발생할 수 있다.
// 함수 내부에서 전달 인자를 바꾸지 맙시다.

// --- 

function changeName(obj) { // 이름을 바꾸고 싶으면 이름 바꾸기 함수를 만들고
    return {...obj, name: 'Lee' }; // 반환할 때 새로운 객체를 반환해주자.
}

console.log(changeName(VALSE));
newObject = changeName(VALSE); 
console.log(VALSE);
console.log(newObject);