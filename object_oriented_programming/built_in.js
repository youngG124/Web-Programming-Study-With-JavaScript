console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));

var MyMath = { // 서로 연관된 변수와 함수를 grouping.
    PI : Math.PI,
    random : function(){
        return Math.random();
    },
    floor : function(val){
        return Math.floor(val);
    }
}

console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(4.2));