var Kim = {
    name : "Kim",
    age : 25,
    first : 10,
    second : 20,
    sum:function(){
        return this.first + this.second; // Kim.first를 사용해도 되지만, 
        // 이 함수가 자신이 속한 객체의 이름을 알 수 없으므로, this를 사용하여
        // 자신이 속한 객체의 이름을 this로 명시 매우 중요!
    }
}

console.log(Kim.sum(Kim.first, Kim.second)); // 이미 객체가 Kim임을 알고 있음. 이를 생략

console.log(Kim.sum());