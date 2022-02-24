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
    constructor(color) { // {} 빈 객체를 만들고 this로 가리킴.
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

class Bmw extends Car { // 하지만 extends로 클래스를 만들면 this로 가리키는 작업을 건너뜀
    constructor(color){
        super(color); // 따라서 super 키워드로 부모 클래스의 생성자를 실행해줘야함. color를 추가해야됨.
        this.navigation = 1;
    }
    park() {
        console.log("Park");
    }
    stop() {
        super.stop(); // overriding 부모클래스의 메소드 사용
        console.log("OFF");
    }
}

const m3 = new Bmw("Blue");

console.log(m3);
m3.stop();