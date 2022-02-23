const Champion = function (...value) {
    const name = value[0];
    this.getName = function(){
        console.log(name);
    }
}

Champion.prototype = {
    constructor : Champion,
    move() {
        console.log("move...");
    },
    design : 1,
}

const azirr = new Champion("azirr");
azirr.getName();



azirr.move();