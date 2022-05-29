//What are the possible ways to create objects in JavaScript




// var object = new Object();
// var obj = Object.create(null);
// var object = {
//     name: "Sudheer",
//     age: 34
// };

// function Person() {}
// Person.prototype.name = "Sudheer";
// var object = new Person();
// console.log(object);

// Singleton
// var object1 = new (function(){
//     this.name = "Mayukh"
// })();
// object1.name = "Test";
// let newObject = object1;
// console.log(newObject.name)

// What is the difference between Call, Apply and Bind
// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//     console.log(
//       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//     );
//   }

//   invite.call(employee1, "Hello", "How are you?");
//   invite.call(employee2, "Hello", "How are you?");

//   invite.apply(employee1, ["hello", "How are you?"])
//   invite.apply(employee2, ["hello", "How are you?"]);

//   const myObj1 = {name: "Test1"}
//   const myObj2 = {name: "Test2"}
//   function myFunction(val1, val2) {
//       console.log(val1 +" "+this.name + val2);
//   }
//   myFunction.call(myObj1, "Jin", "Hei");
//   myFunction.call(myObj2, "Jin", "Hei");
//   myFunction.apply(myObj1, ["Jin", "Hei"]);
//   myFunction.apply(myObj2, ["Jin", "Hei"]);
  //myFunction.bind(myObj2)("Jin", "Hei");

//   What is the purpose of the array slice, splice method
//   let arrayIntegers = [1, 2, 3, 4, 5];
//   let arrayIntegers1 = arrayIntegers.slice(1, 2);
//   let arrayIntegers2 = arrayIntegers.splice(1, 2);
//   console.log(arrayIntegers)
//   console.log(arrayIntegers2);

//What is a first order function
//const firstOrder = () => console.log("I am a first order function!");

//What is a higher order function
//closures

// What is the currying function
// const curryFunction = (a) => (b) => (c) => a + b + c;
// console.log(curryFunction(1)(2)(3))

// What is a pure function
// let numArray = [];
// console.log(numArray.push(100));

// const pureAddNumber = (number) => (numArray) => numArray.concat(number);
// var t;
// function add(x, y, z) {
//     t = 1;
//     return t + x + y + z;
// }
// console.log(add(1,2,3)); //impure

// function add(x, y,z) {
//     var t ;
//     t = 1;
//     return x + y + z + t;
// }

// console.log(add(1,2,3));

// What is the difference between let and var
// function userDetails(name){
//     //console.log(test1);
//     console.log(test2);
//     let test1 = "abc";
//     var test2 = "fgh";
// }
// userDetails("Mayukh")

// What is memoization
// const fibo = (n, memo = {}) => {
//     if( n in memo) return memo[n];
//     if( n=== 0) return 0;
//     if(n === 1) return 1;
//     memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
//     return memo[n];
// }

// console.log(fibo(46));

// What is Hoisting
// console.log(message); //output : undefined
// var message = "The variable Has been hoisted";

// What are classes in ES6
// function Bike(name, model) {
//     this.name = name;
//     this.model = model;
// }

// Bike.prototype.getDetails = function() {
//     return this.name+" "+this.model;
// }

// What is a callback function

// function callbackFunction(name) {
//     console.log("Hello " + name);
// }

// function outerFunction(callback){
//     let name = "Mayukh";
//     callback(name);
// }

// outerFunction(callbackFunction)

// what is promise chaining

// new Promise((resolve, reject) => {
//     resolve(2)
// }).then(value => {
//     console.log(value);
//     return value * 2;
// }).then(value => {
//     console.log(value);
//     return value + 5
// }).then(value => console.log(value));

// JavaScript Demo: Promise.all()
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2]).then(value => {
//     console.log(value);
// })
// What is the purpose of the race method in promise
// var promise1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, "one");
//   });
//   var promise2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, "two");
//   });
//   Promise.race([promise1, promise2]).then(value => {
//       console.log(value);
//   })
// What is the purpose of double exclamation
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!-1);

// What is the purpose of the delete operator
// const test = {name: "Mayukh", age: 33};
// delete test.age;
// console.log(test);

// How do you access history in javascript
// function goBack() {
//     window.history.back();
//   }
//   function goForward() {
//     window.history.forward();
//   }

// What is isNaN
// isNaN("Hello"); //true
// isNaN("100"); //false

// DOMContentLoaded -> event called when HTML loaded without css
//load => with css assets images
//NativeObject -> Date, Math, ParseInt
//Host Objects -> Provided by browser environment(window, document, location, history)

// How do you test for an empty object
const obj = {
    
}
//console.log(Object.entries(obj).length === 0 && obj.constructor === Object);
// function Tree(name) {
//     this.name = name
//   }
  
//   let theTree = new Tree('Redwood')
//   console.log(theTree.constructor)
// let o = {}
// console.log(o.constructor === Object) // true

// let o = new Object
// o.constructor === Object // true

// let a = []
// console.log(a.constructor === Array) // true

// let a = new Array
// a.constructor === Array // true

// let n = new Number(3)
// n.constructor === Number // true

// What is an arguments object
    // let total = 0;
    // for(let i = 0; i < arguments.length; i++) {
    //     total += arguments[i];
    // }
    // return total;
//}


// How do you make first letter of the string in an uppercase
// let test = "abc";
// console.log(test.charAt(0).toUpperCase()+test.slice(1));

// How do you compare two date objects
// const d1 = new Date();
// const d2 = new Date();
// console.log(d1.getTime() === d2.getTime())

// How do you check if a string starts with another string
// "Good morning".startsWith("Good");
// console.log("Good morning".startsWith("Good"));

// How do you add a key value pair in javascript
// var object = {
//     key1: "test1",
//     key2: "test2",
//   };
//   let key3 = "Max"
//   object.key3 = "lll"
//   console.log(object)

// Can you write a random integers function to print integers with in a range
// const minMaxRange = (max, min) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// console.log(minMaxRange(1,100))

//What are the string methods available in Regular expression
//var msg = "Hello John";
//var n = msg.search(/John/i); // 6
// var n = msg.replace(/John/i, "Buttler");
// console.log(n);
// var pattern = /you/;
// console.log(pattern.exec("How are you?"));
// console.log(pattern.test("How are you?"));

// How do you detect a mobile browser without regexp

// function detectmob() {
//     if (
//       navigator.userAgent.match(/Android/i) || Navigator Object is used to get information about the browser
// (browsername, browser version, cookie enabled)
//       navigator.userAgent.match(/webOS/i) ||
//       navigator.userAgent.match(/iPhone/i) ||
//       navigator.userAgent.match(/iPad/i) ||
//       navigator.userAgent.match(/iPod/i) ||
//       navigator.userAgent.match(/BlackBerry/i) ||
//       navigator.userAgent.match(/Windows Phone/i)
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//How do you get the image width and height using JS
// var img = new Image();
// img.onload = function () {
//   console.log(this.width + "x" + this.height);
// };
// img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
 //console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));

//  var width =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;
//   console.log(width)

//difference between __proto__ vs prototype

// let person1 = {name: "Max"}
// let person2 = {age: 40}
// Object.setPrototypeOf(person1, person2);
// console.log(person1.__proto__);
// function test(){

// }
// test.prototype.name = "text";
// console.log(test.prototype);

// let cat = {breed: "test"};
// let myCat = {name: "Flugffy"};
// Object.setPrototypeOf(myCat, cat);
// console.log(myCat.breed);
// console.log(myCat.__proto__);
// function test(){

// }
// test.prototype.prop = "hello";
// let t = new test();
// console.log(t.__proto__);
// console.log(test.prototype);

//What is a freeze method
// 
// "use strict"
// const obj = {
//     prop: 100,
// };

// Object.freeze(obj);
// obj.prop = 200; // Throws an error in strict mode

// console.log(obj.prop); //100
// const obj = {
//     prop: 42
//   };
  
//   Object.freeze(obj);
  
//   obj.prop = 33;
//   // Throws an error in strict mode
  
//   console.log(obj.prop);
  // expected output: 42

//   What is a rest parameter
  
// const values = (value1,...nums, c1) => {
//     console.log(nums);
// }
// values(1,2,3,4)
//What is a spread operator

// How do you determine whether object is frozen or not
// const object = {
//     property: "Welcome JS world",
//   };
//   object.p1 = "Test"
//   Object.freeze(object);
//   console.log(Object.isFrozen(object));

// What is the purpose of using object is method
//console.log("abc"==="abc");

//How do you copy properties from one object to other

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };
// const returnedObject = Object.assign(target, source);
// console.log(target);

//Proxy
// const target = {
//     message1: "hello",
//     message2: "everyone"
// };

// const handler1 = {};
// const proxy1 = new Proxy(target, handler1);
// console.log(proxy1);

//What is the main difference between Object.values and Object.entries method
// const object = {
//     a: "Good morning",
//     b: 100,
//   };
  //console.log(Object.entries(object));
  // for (let value of Object.values(object)) {
  //   console.log(`${value}`); // 'Good morning'
  //   100;
  // }
//Weakmap

// const obj1 = {name: "test"};
// const obj2 = {name: "minnie"};
// let wmap = new WeakMap();
// wmap.set(obj1, "max")
// wmap.set(obj2, "newtest");
// // for(let [key, value] of wmap){
// //     //console.log(key)
// // }
// console.log(wmap.get(obj1));
// var msg = "Good morning";
// function greeting() {
//   msg = "Good Evening";
//   console.log(msg);
// }
// greeting();


//What are javascript accessors
// var user = {
//     firstName: "Mayukh",
//     lastname: "Basu",
//     get name(){
//         return this.firstName
//     },
//     set name(name){
//         this.firstName = name
//     }
// }

// console.log(user.name);
// user.name = "Minjie";
// console.log(user.name);

//How do you define property on Object constructor
// "use strict"

// const newObj = {};
// Object.defineProperty(newObj, "newProp", {
//     value: 100,
//     writable: false
// });
// newObj.newProp = 900
// console.log(newObj.newProp);
// var obj = { counter: 0 };
// Object.defineProperty(obj, "increment", {
//     get: function () {
//       this.counter++;
//     },
//   });
//   Object.defineProperty(obj, "decrement", {
//     get: function () {
//       this.counter--;
//     },
//   });
//   console.log(obj.increment); //6
// const iterable = ["one", "two", "three"];
// const iterator = iterable[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

//understanding-javascript-decorators
// const logger = (message) => console.log(message)
// function loggerDecorator(logger) {
//     return function (message) {
//         logger.call(this.message);
//         console.log("message logged at:", new Date().toLocaleString())
//     }
// }

// const decoratedLogger = loggerDecorator(logger);
//How do you check whether an object can be extendable or not
// const newObject = {name: "Mayukh"};
// Object.freeze(newObject)
// console.log(Object.isExtensible(newObject)); //true
const newObject = {};

// Object.defineProperties(newObject, {
//   newProperty1: {
//     value: "John",
//     writable: true,
//   },
//   newProperty2: {},
// });
// console.log(Object.keys(newObject));

//How do you list all properties of an object
//   const newObject = {
//     a: 1,
//     b: 2,
//     c: 3,
//   };
  
//   console.log(Object.getOwnPropertyNames(newObject));
//Is enums feature available in javascript

//var daysEnum = Object.freeze({monday: 1})

//How do you list all properties of an object

// const newObject = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// Object.keys(newObject).forEach(data => {
//   console.log(data);
// });
// console.log(Object.keys(newObject))

//How do you get property descriptors of an object
// const newObject = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const descriptorObject = Object.getOwnPropertyDescriptors(newObject);
// console.log(descriptorObject.a.writable);

//How do you compare scalar arrays
// const arrayFirst = [1, 2, 3, 4, 5];
// const arraySecond = [1, 2, 3, 4, 5];
// console.log(arrayFirst.length === arraySecond.length)
// console.log(arrayFirst.length === arraySecond.length &&
//   arrayFirst.every((value, index) => value === arraySecond[index]))

//How to get the value from get parameters
// let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3";
// let url = new URL(urlString);
// let param = url.searchParams.get("z");
// console.log(param);

// let x = 1023871987389123;
// console.log(x.toLocaleString());

//What are default values in destructuring assignment
  

// var x, y, z;

// [x = 2, y = 4, z = 6] = [10];
// console.log(x);
// console.log(y);
// console.log(z);
//What is the output of below spread operator array
//console.log([..."John Resig"])

//What is the purpose of some method in arrays
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const odd = (element) => element % 2 !== 0;
// console.log(array.some(odd));

//What is the output of below function calls
// const circle = {
//   radius: 20,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(circle.diameter());
// console.log(circle.perimeter());

//What happens if we add two arrays
// console.log(["a"] + ["b"]); // "ab"
// console.log([] + []); // ""
// console.log(![] + []); // "false", because ![] returns false.

//What is the output of prepend additive operator on falsy values

// console.log(+null); // 0
// console.log(+undefined); // NaN
// console.log(+false); // 0
// console.log(+NaN); // NaN
// console.log(+""); // 0

//How do you remove falsy values from an array
// const myArray = [false, null, 1, 5, undefined];
// myArray.filter(Boolean); 
// console.log(myArray.filter(Boolean))

//How do you get unique values of an array
//console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]

//How do you map the array values without using map method
// const countries = [
//   { name: "India", capital: "Delhi" },
//   { name: "US", capital: "Washington" },
//   { name: "Russia", capital: "Moscow" },
//   { name: "Singapore", capital: "Singapore" },
//   { name: "China", capital: "Beijing" },
//   { name: "France", capital: "Paris" },
// ];
// const cityNames = Array.from(countries, (country) => country.capital)
// //const cityNames = Array.from(countries, (country) => country.capital);
// console.log(cityNames);

//How do you empty an array
// let cities = ["Singapore", "Delhi", "London"];
// cities.length = 0;

//What is the easiest way to convert an array to an object
// var fruits = ["banana", "apple", "orange", "watermelon"];
// var fruitsObject = { ...fruits };
// console.log(fruitsObject["0"]);

//How do you verify that an argument is a Number or not
// function isNumber(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

//How do you flattening multi dimensional arrays
// const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
// const flattenArr = [].concat(...biDimensionalArr)
// console.log(flattenArr);

//How do you detect primitive or non primitive value type

// let primitive = 30;
// let nonPrimitive = {}
// function isPrimitive(val){
//   return Object(val) !== val;
// }
// console.log(isPrimitive(primitive));
// console.log(isPrimitive(nonPrimitive));

//How do you make an object iterable in javascript
// const collection = {
//   one: 1,
//   two: 2,
//   [Symbol.iterator](){
//     let values = Object.keys(this);
//     let i = 0;
//     return {
//       next: () => {
//         return {
//           value: this[values[i++]]
//         }
//       }
//     }
//   }
// }

// const iterator = collection[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());

//How do you check an object is a promise or not

// function isPromise(value) {
//   return Boolean(value && typeof value.then === "constructor");
  
// }
// let i = 1;
// var promise = new Promise(function (resolve, reject) {
//   resolve();
// });
// console.log(isPromise(i)); // false
// console.log(isPromise(promise)); // true

//Spread syntax ---> remove the array bracket
// function sum(x, y , z){
//   return x + y + z;
// }
// const arr =  [1, 2, 3]
// console.log(sum(...arr));

// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];
// console.log(numberStore);
// let a = [[1], [2], [3]];
// let b = [...a];

// b.shift().shift();
// console.log(b);

// Rest Syntax

// const sum = (...arr) => {
//   let sum = arr.reduce((acc, value) => acc+value , 0);
//   return sum;
// }

// console.log(sum(1,2,3,4,5))

//What is nullish coalescing operator (??)?
// console.log(false ?? null); // true
// console.log(false ?? true); // false
// console.log(undefined ?? true); // true

//For nullish coalescing operator if the left side is null or undefined then 
//the right side if true will be printed

//Reverse an Array using reduce method
// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.reduce((acc, value) => [value, ...acc],[]);
// console.log(newArray);

// What is debouncing?
// function debounce(func, timeout = 1000) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args)
//     }, timeout)
//   }
// }

// function fetchResults() {
//   console.log("Fetchingreport suggestions");
// }

// const processChange = debounce(() => fetchResults());

//Output Problems

// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);

// function main() {
//   console.log("A");
//   setTimeout(function print() {
//     console.log("B");
//   }, 0);
//   console.log("C");
// }
// main();
// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);
// let x = function test(){};
// console.log( !!x);

// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2[2] = 100;
// console.log(array2);

// var array3 = [, , ,];
// console.log(array3);
// const obj = {
//   prop1: function () {
//     return 0;
//   },
//   prop2() {
//     return 1;
//   },
//   ["prop" + 3]() {
//     return 2;
//   },
// };

// console.log(obj.prop1());
// console.log(obj.prop2());
// console.log(obj.prop3());

// function printNumbers(first, second, first) {
//   console.log(first, second, first);
// }
// printNumbers(1, 2, 3);

// const printNumbersArrow = (first, second, first) => {
//   console.log(first, second, first);
// };
// printNumbersArrow(1, 2, 3);

// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));

// console.log(String.prototype.trimLeft.name === "trimLeft");
// console.log(String.prototype.trimLeft.name === "trimStart");

//console.log(Math.max());

// console.log(10 == [10]);
// console.log(10 == [[[[[[[10]]]]]]]);

// console.log(10 + "10");
// console.log(10 - "10");

// console.log([0] == false);
// if ([0]) {
//   console.log("I'm True");
// } else {
//   console.log("I'm False");
// }

//console.log([1, 2] + [3, 4]);

// const numbers = new Set([1, 1, 2, 3, 4]);
// console.log(numbers);

// const browser = new Set("Firefox");
// console.log(browser);

//console.log(NaN === NaN);

// let numbers = [1, 2, 3, 4, NaN];
// console.log(numbers.indexOf(NaN));

// let [a, ...b] = [1, 2, 3, 4, 5];
// console.log(a, b);

// async function func() {
//   return 10;
// }
// console.log(func());

// function func () {
//   return Promise.resolve(10);
// }

async function func() {
  await 10;
}
func().then(data => console.log(data));
















