// var point = {
//     x : 0,
//     y : 0,
//
//     moveTo : function(x, y) {
//         var that=this;
//         that.x = this.x + x;
//         that.y = this.y + y;
//     }
//
// };
// point.moveTo(1, 1);
// console.log(point.x);
//在 JavaScript 中，函数也是对象，因此函数可以作为一个对象的属性，此时该函数被称为该对象的方法，在使用这种调用方式时，this 被自然绑定到该对象。
//作为函数调用
// function makeNoSense(x) {
//     this.x = x;
// }
//
// makeNoSense(5);
// console.log(x);
// // window里的x(就是该全局对象)
//
//
// // 内部函数
// var point = {
//     x : 0,
//     y : 0,
//     moveTo : function(x, y) {
//         // 内部函数
//         var moveX = function(x) {
//             this.x = x;//this 绑定到了哪里？
//         };
//         // 内部函数
//         var moveY = function(y) {
//             this.y = y;//this 绑定到了哪里？
//         };
//
//         moveX(x);
//         moveY(y);
//     }
// };
// point.moveTo(1, 1);
// console.log(point.x);
// console.log(point.y);
// console.log(x);
// console.log(y);
//这属于 JavaScript 的设计缺陷，正确的设计方式是内部函数的 this 应该绑定到其外层函数对应的对象上，
// 为了规避这一设计缺陷，聪明的 JavaScript 程序员想出了变量替代的方法，约定俗成，该变量一般被命名为 that。

// //解决方案
// var point = {
//     x : 0,
//     y : 0,
//     moveTo : function(x, y) {
//         var that = this;
//         // 内部函数
//         var moveX = function(x) {
//             that.x = x;
//         };
//         // 内部函数
//         var moveY = function(y) {
//             that.y = y;
//         };
//         moveX(x);
//         moveY(y);
//     }
// };
// point.moveTo(1, 1);
// console.log(point.x);
// console.log(point.y);
// console.log(x);
// console.log(y);

// 作为构造函数调用
// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }
// var obj=new Point(1,3);
//
// console.log(obj.x);
// console.log(obj.y);
// 构造函数


// 使用 apply 或 call 调用
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//     this.moveTo = function (x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
// //使用 apply 或 call 调用
// var p1 = new Point(0, 0);
// var p2 = {
//     x: 0,
//     y: 0
// };
// // p1.moveTo(1, 4);
// // console.log(p1.x);
// // console.log(p1.y);
// p1.moveTo.apply(p2, [10, 3]);
// console.log(p2.x);
// console.log(p2.y);

// function sayhello(x,y) {
//     console.log(this+"对大家说"+x+y);
// }
//
// sayhello.call("张三","下午好","一起打游戏去呀");
// function hello(thing) {
//     console.log("Hello" + thing);
// }
// hello("world");
// hello.call(window, "world");
// var person = {
//     name: "Brendan Eich",
//     hello: function(thing) {
//         console.log(this.name + " says hello " + thing);
//     }
// };
// person.hello("world");
// person.hello.call(person, "world");
// function hello(thing) {
//     console.log(this.name + "says hello " + thing);
// }
//
// person = { name: "Brendan Eich"
// };
// person.hello = hello;
// person.hello("world");
// // hello("world");

var person = {
    name: "Brendan Eich",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
};
var boundHello = function(thing)
{
    return person.hello.call(person, thing);

};

boundHello("world");