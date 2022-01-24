var memberArray = ['Kim', 'Joe', 'Seo'];
console.log("memberArray[2] : ", memberArray[2]);

var memberObject = {
    manager : 'Kim',
    developer : 'Joe',
    designer : 'Seo'
}
memberObject.designer = 'SeoYS';

console.log(memberObject.developer); // . 사용
console.log(memberObject['designer']); // 대괄호 사용

console.log("before delete : ", memberObject.manager);
delete memberObject.manager
console.log("after delete : ", memberObject.manager);
