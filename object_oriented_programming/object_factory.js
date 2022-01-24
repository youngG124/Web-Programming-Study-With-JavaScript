//constructor : 같은 종류의 객체가 더 많아진다면?
//객체 양산

function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}

var Kim = new Person('kim', 10, 20, 30);
var Lee = new Person('lee', 10, 10, 45);

console.log(Kim.sum());
console.log(Lee.sum());

var d1 = new Date('2022-1-24'); // 객체를 만들어서 우리에게 리턴해줌.
console.log(d1.getMonth());

console.log(Date);



console.log(Person());
console.log(new Person()); // new 키워드를 통해 일반적인 함수가 아닌 객체 생성 함수,
// 생성자, constructor가 된다.