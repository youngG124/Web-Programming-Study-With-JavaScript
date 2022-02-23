// const car = {
//     wheels : 4,
//     drive(){
//         console.log("Drive....");
//     },
// }

const Bmw = function (color) {
    const c = color;
    this.getcolor = function(){
        console.log(c); // 값을 볼 수 는 있으나 수정은 불가능
    }
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function() {
    console.log("drive...");
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
    console.log("Stop!!!");
} // 덮어서 쓸 경우 constructor가 사라짐.

Bmw.prototype = {
    constructor : Bmw, // 혹은 cosntructor를 이렇게 수동으로 명시해줘야 함.
    wheels : 4,
    drive() {
        console.log("drive...");
    },
    navigation : 1,
    stop() {
        console.log("Stop!");
    },
}

const m3 = new Bmw("green");
const x3 = new Bmw("blue");

// m3.__proto__ = car;
// x3.__proto__ = car;

console.log(m3);
console.log(x3);
console.log(x3.wheels);
x3.drive();
x3.stop();
console.log(m3.navigation);

console.log(m3 instanceof Bmw);
console.log(x3.constructor === Bmw);

console.log(m3.color);

m3.getcolor();