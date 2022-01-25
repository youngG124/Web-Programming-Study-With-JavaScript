class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person{
    avg(){
        console.log('personplus');
        return this.sum()/2
    }
}


var Kim = new PersonPlus('Kim', 10, 20);
console.log(Kim.avg());