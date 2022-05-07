const X = 0;
const Y = 0;
const COORDINATE = {
    x: X,
    y: Y
};

console.log(COORDINATE);
// key === value 인 경우, value 생략해도 된다.

function makeObj(name, age) {
    return {
        name,
        age,
    };
};

console.log(makeObj('valse', 27));