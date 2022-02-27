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