const OBJ = {
    name: 'Valse',
    age: '26',
};
// 코딩 하는 시점에 정적으로 접근 확정
OBJ.name;
OBJ.age;

// 동적으로 접근하고 싶을때, 대괄호 표기법을 사용한다.

function getValue1(obj, key) {
    return obj.key;
} // not working

function getValue2(obj, key) {
    return obj[key];
} // its working!

console.log(getValue2(OBJ, 'name'));

function addKey(obj, key, value) {
    obj[key] = value;
};

addKey(OBJ, 'job', 'enginner');
console.log(OBJ);

function deleteKey(obj, key) {
    delete obj[key];
};

deleteKey(OBJ, 'job',);
console.log(OBJ);