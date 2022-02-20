function add(...number) {
    let result = 0;
    number.forEach(num => (result+=num));
    console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8);