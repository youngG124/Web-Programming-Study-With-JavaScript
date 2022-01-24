var memberArray = ['Kim', 'Joe', 'Seo'];
console.group('array loop');
var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop'); // group 안의 console.log를 보기좋게 해줌.



var memberObject = {
    manager : 'Kim',
    developer : 'Joe',
    designer : 'Seo'
}
console.group('object loop');
for(var name in memberObject){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');