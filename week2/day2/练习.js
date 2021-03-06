function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);// false 
console.log(f1.getY === f2.getY);// true
console.log(f1.__proto__.getY === Fn.prototype.getY);//true
console.log(f1.__proto__.getX === f2.getX);// false
console.log(f1.getX === Fn.prototype.getX);//false
console.log(f1.constructor);// f Object
console.log(Fn.prototype.__proto__.constructor);// f Object
f1.getX();// 100
f1.__proto__.getX(); // undefined
f2.getY(); // 200
f2.getY === Fn.prototype.getY // true;
Fn.prototype.getY();//400
f1.sum(); // 300
Fn.prototype.sum();// NaN

function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {console.log(5);}
Foo.getName(); 
getName();
Foo().getName();
getName();
var a = new Foo.getName();
var b = new Foo().getName();
var c = new new Foo().getName();
console.log(a,b,c);





function Fn(){
    var a = 1;
    this.a = a;
}
Fn.prototype.say = function(){
    this.a = 2;
};
Fn.prototype = new Fn;
var f1 = new Fn;
f1.__proto__.b = function (){
    this.a = 3;
};
console.log(f1.a);//1
console.log(f1.prototype);// undefined  只有函数才有prototype
console.log(f1.b);
console.log(f1.hasOwnProperty('b'));
console.log('b' in f1);
console.log(f1.constructor == Fn);
console.log(Fn.prototype);



