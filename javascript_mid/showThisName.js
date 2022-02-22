const mike = {
    name : "Mike",
};

const tom = {
    name : "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, 'singer');
update.call(tom, 1998, 'football plyaer');

console.log(mike);
console.log(tom);
console.log('----------');

const nums = [3, 10, 1, 6, 4];

const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.call(null, ...nums);
console.log(minNum, maxNum);

//call 은 요소를 받고, apply는 배열을 받는다.

const updateMike = update.bind(mike); // 항상 this로 mike를 받는 updateMike 함수
updateMike(1992, 'baseball player');
console.log(mike);
mike.name = 'Mbappe';
console.log(mike);

console.log('---------------------------');

const user = {
    name : "Mike",
    showName : function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;

fn();
fn.call(user);

let boundFn = fn.bind(user);
boundFn();