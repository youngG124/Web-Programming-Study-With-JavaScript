var score = 62;

var result = score >= 60 ? 'pass' : 'fail';

console.log(score, result);

console.log((-5)**2);

function print(a) {
    console.log(a);
}

var num = 5;
num **= 2;
print(num);

console.log('-----------');

var a = 'cat'||'dog';
var b = false&&'dog';

console.log(a);
console.log(b);

console.log('-----------');
//단축 평가로 if문 대체
var done = true;
var message = '';

message = done && '완료';
console.log(message);


var done2 = false;
var message = '';

message2 = done2 || '미완료';
console.log(message2);

var done3 = true;
var message = '';

message = done ? '완료' : '미완료'; // if(done) message = '완료'; else message = '미완료';
console.log(message);

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || 'kkkk';
    return str.length;
}
// 매개변수가 전달되지 않을 경우 단축 평가를 사용해 default값을 정할 수 있음. str = ''로.

// 인자로 아무것도 넘기지 않았지만, 단축 평가를 사용해서 kkkk를 기본값으로 설정하여 함수의 결과가 4가 된다.
console.log(getStringLength());