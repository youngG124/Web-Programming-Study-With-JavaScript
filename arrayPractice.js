let days = ['월', '화', '수', '목', '토'];

let tempDay = days[4];
days[4] = '금';
days[5] = tempDay;
console.log(days);