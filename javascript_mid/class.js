const User = function (name, age) {
    this.name=name;
    this.age=age;
    this.showName=function(){
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);

//ES6에 추가된 class
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
//class는 new없이 실행하면 type Error가 뜸!!

console.log(mike);
console.log(tom);

mike.showName();

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive...");
    }
    stop() {
        console.log("STOP");
    }
}

class Bmw extends Car {
    park() {
        console.log("Park");
    }
}

const m3 = new Bmw("Blue");

console.log(m3);