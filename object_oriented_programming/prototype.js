function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function(){
    return this.first+this.second+this.third;
}

var Kim = new Person('kim', 10, 20, 30);
var Lee = new Person('lee', 10, 10, 45);
console.log(Kim.sum());
console.log(Lee.sum());