let arr = [27, 8, 5, 13];

function fn(a,b){
    return a-b;
}

arr.sort(fn);

//console.log(arr);

let pushResult = arr.reduce((prev, cur) =>{
    if(cur > 5) {
        prev.push(cur);
    }
    return prev;
}, []);

let sumResult = arr.reduce((prev, cur) =>{
    if(cur > 5) {
        prev += cur;
    }
    return prev;
}, 0);

console.log(pushResult);
console.log(sumResult);
