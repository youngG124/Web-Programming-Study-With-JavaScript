let str = "Kim-Jane-Lee"

let names = str.split("-");

for(let i = 0; i<names.length; i++) {
    //console.log(names[i]);
}

let [user1, , user2] = ['Kim', 'Tom', 'Jane', 'Tony'];
//console.log(user2);

let user = {name:"kim", age:25};
let {name, age:koreanAge, gender, defaultGender='male'} = user;
console.log(name, koreanAge, gender, defaultGender);