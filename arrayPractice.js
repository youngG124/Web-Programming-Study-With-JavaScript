let days = ['월', '목', '금', '토', '일'];

// let tempDays = [days.shift()];
// tempDays.push('화', '수');
// for(let day of days) {
//     tempDays.push(day);
// }

days.splice(1,0,"화","수");
console.log(days);

for(let i = 0; i < 5; i++) {
    let result = Math.floor(Math.random()*1000) + 1;
    console.log(result);
}
