foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('done');

outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j ++) {
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log("done");


console.log('------------------');

var string = 'kaaaakaaakkaaaak';
var search = 'k';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue; // 그냥 === search 써도 되지만 continue 써봄.
    count++; // if 문 내의 코드가 길다면 continue를 사용하는 것이 가독성에 좋다.
}

console.log(count);