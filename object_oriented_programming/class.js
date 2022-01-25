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
    constructor(name, first, second, third){
        super(name,first,second);
        this.third = third;
    }
    sum(){
        return super.sum() + this.third;
    }
    avg(){
        console.log('personplus');
        return this.sum()/3;
    }
}


var Kim = new PersonPlus('Kim', 10, 20, 30);
console.log(Kim.avg());