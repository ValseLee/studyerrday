// 객체는 값과 함수를 포함하기 때문에 메모리를 많이 갖고 잇게 된다
// 객체를 많이 쓸수록 앱이 무거워질 수 있다는 점 유의하자

// console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// globalThis 는 브라우저에서도 쓸 수 있다.
// -> Window가 출력
console.log(this); // 전역객체를 가리킨다. // 브라우저에는 Window
eval('const num = 2; console.log(num);');
console.log(isFinite(1));
console.log(isFinite(Infinity));

// parse
// 문자열인 숫자를 숫자 타입으로 변환
console.log(parseInt('12.3'));
console.log(parseFloat('12.3'));

// URL (= URI, Uniform Resouce Identifier 의 하위개념);
// 아스키 문자로만 구성되어야 한다.
// 한글 및 특수문자를 주소에 써야 한다면 이스케이프 처리를 해주어야 한다.
// 정해진 다른 문자로 변경해야 함
const URL = 'https://승준.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분 URL을 쓸 때는? Component
// => 프로토콜 생략된 경우
const part = '승준.com';
console.log(encodeURIComponent(part));
