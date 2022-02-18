let days = ['월', '목', '금', '토', '일'];

// let tempDays = [days.shift()];
// tempDays.push('화', '수');
// for(let day of days) {
//     tempDays.push(day);
// }

days.splice(1,0,"화","수");

for(let i = 0; i < 5; i++) {
    let result = Math.floor(Math.random()*1000) + 1;
}


let arr = ["나는", "김신영", "입니다"];

arr.splice(1,0,"개발자");
//console.log(arr);

arr.concat(["안녕하세요"]);

arr.forEach((name, index) => {
    //console.log(`${index+1}.${name}`);
});


//console.log(arr.indexOf("김신영"));

let userList = [
    { name: "Mike", age:30},
    { name: "Jane", age:27},
    { name: "Tom", age:10},
];


const result = userList.filter((item) => {
    return item.age === 10;
})

console.log(result);