const car = {
    wheels : 4,
    drive(name) {
        console.log(`driving ${name}...`);
    },
};

const bmw = {
    color : "blue",
    drive_mode : "sports",
};

const benz = {
    color : "gray",
    drive_mode : "comfort",
};

const audi = {
    color : "gray",
    drive_mode : "neutral",
};

const _320d = {
    segment : 'D',
    feature : 'sedan',
    color : 'skyBlue',
    name : '320d',
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

_320d.__proto__ = bmw;

console.log(bmw);
console.log(bmw.wheels); // 일단 내부에서 찾고 없으면 proto 확인

console.log(_320d.name);
console.log(_320d.drive_mode);
_320d.drive(_320d.name); // prototype chain

for(p in _320d) {
    if(_320d.hasOwnProperty(p)) {
        console.log('own property : ', p);
    } else {
        console.log('pro property : ', p);
    }
}