function add(...number) {
    let result = 0;
    number.forEach(num => (result+=num));
    console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8);

function addReduce(...number) {
    let result = number.reduce((prev, cur) => prev + cur);
    console.log(result);
}

addReduce(1,2,3);

console.log("---------");

function User(name, age, ...skill) {
    this.name=name;
    this.age=age;
    this.skills = skill
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Kim', 20, 'react');
const user3 = new User('Kim', 20, 'football');

console.log(user1);
console.log(user2);
console.log(user3);

console.log("---------");

let arr1 = [1,2,3];
let arr2 = [4,5,6];

// arr2.forEach(num => {
//     arr1.push(num)
// })
// console.log(arr1);

let arr3 = [...arr1, ...arr2];
console.log(arr3);