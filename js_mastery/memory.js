// memory

function add(a, b) {
  return a + b;
}

const sum = add; // 이름만 할당하고
console.log(sum(1, 2)); // 이렇게 함수로 쓸 수가 있다
// add와 sum이 동일한 메모리 주소를 갖게 된다.
