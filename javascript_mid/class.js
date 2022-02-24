const User = function (name, age) {
    this.name=name;
    this.age=age;
    this.showName=function(){
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showname(){
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);

console.log(mike);
console.log(tom);

mike.showName();