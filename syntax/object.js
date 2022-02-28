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