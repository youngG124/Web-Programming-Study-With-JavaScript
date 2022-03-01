// object is mutable value
// 함수도 프로퍼티 값으로 사용할 수 있고, 이 때 이를 메소드라고 부른다.

var person = {
    name : 'Kim',
    age : 25,
};

console.log(person);

var counter = {
    num : 0,
    increase : function() {
        this.num++;
    },
    111 : 0,
};

for ( var k = 0; k < 5; k ++) {
    counter.increase();
}
console.log(counter.num);

var empty = {};
console.log(empty);

console.log(typeof(counter.num));

// 대괄호 프로퍼티 접근 연산자
console.log(counter['num']);
// 숫자로 이뤄진 프로퍼티 키는 따옴표 생략 가능
console.log(counter[111]);

// property shorthand
let x = 1, y = 2;

const obj = { x, y };
console.log(obj);



// coumputed property name 계산된 프로퍼티 이름
const prefix = 'prop';
let i = 0;

const obj2 = {
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
};

console.log(obj2);

const o = {};
o.a = 1;
console.log(o);

console.log(score); // undefined
score = 80;
var score; // 선언은 런타임 이전에 실행된다.
console.log(score); // 80

// 유사 배열 객체(array-like object)
// 인덱스를 사용해 각 문자 접근 가능, length 프로퍼티 가짐, for문으로 순회 가능
var str = 'string';
console.log(typeof(str));

console.log(str[0]); // 원시 값을 객체처럼 사용하면 "래퍼 객체(21.3절)"로 자동 변환된다.

str[0] = 'S'; // 문자열은 원시 값이므로 변경 불가능. read-only, immutable, 에러는 발생하지 않음. 데이터 신뢰성 보장.
str = 'S';
console.log(str); // 하지만 새로운 문자열을 할당하는 것은 가능함.

var score = 80;
var copy = score;

console.log(copy);
score = 100;
console.log(score);
console.log(copy);
