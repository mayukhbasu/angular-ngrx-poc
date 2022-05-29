// let x = 1;
// const parentFunction  = () => {
//     let myValue = 2;
//     console.log(x);
//     console.log(myValue);


//     return  childFunction = () => {
//         console.log(x+=5);
//         console.log(myValue += 1);
//     }

    
//  }

// let func = parentFunction();
// func();
// func();

// const result = parentFunction();
// result();



//IIFE
// const privateCounter = (() => {
//     let count = 0;
//     console.log(`initial value ${count}`);
//     return () => {count += 1; console.log(count)};
// })();

// privateCounter();
// privateCounter();
// privateCounter();


// const person = {
//     alive: true
// }

// const musician = {
//     plays: true
// }

//  Object.setPrototypeOf(musician, person);

// const guitarist = {
//     strings: 6,
//     __proto__: musician
// }

// console.log(guitarist.alive);

// let key = "likes birds";
// let user = {}
// user[key] = true;
// console.log(user);


// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
//   };

//   for(let code in codes){
//       console.log(code);
//    }

// let user1 = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
//   for(let key of Object.entries(user1)){
//       console.log(key)
//   }


// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// console.log(admin === user);


// let a = {};
// let b = {}; 
// console.log(a == b);


// let user = {
//     name: "John",
//     age: 30
// }

// let cloned = {};
// for(let key in user){
//     cloned[key] = user[key]
// }

// console.log(cloned);


// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// Object.assign(user, permissions1, permissions2);
// console.log(user);


// let user = { name: "John" };
// Object.assign(user, {name: "King"});
// console.log(user);


// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   console.log(clone); // 

// let user = {
//     // ...
//     a: 1,
//     name: "King"
//   };
  
//   // first, declare
//   function sayHi() {
//     console.log(this.name);
//   };
  
// //   // then add as a method
//   sayHi.call(user)
// let user = {name: "Mayukh"};
// function testCall(x1, x2){
//   console.log(this.name, x1, x2);
// }
// testCall.call(user, 10, 20);

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => {
//         console.log(this.firstName);
//       }
//       arrow();
//       return 2
//     }
    
//   };
//   console.log(user.sayHi())


// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log( user.ref.name ); 

// function makeUser(){
//     return {
//         name: "Max",
//         ref(){
//             return this
//         }
//     }
// }

// let user = makeUser();
// console.log(user.ref().name);

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // shows the current step
//       console.log( this.step );
//       return this;
//     }
//   };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
//ladder.up().up().down().showStep().down().showStep();


// function BigUser() {

//     this.name = "John";
  
//     return { name: "Godzilla" };  // <-- returns this object
//   }
//   console.log(new BigUser().name);



// function SmallUser () {
//     this.name = "John";
//     return;
// }
// console.log(new SmallUser().name);


// let obj = {};
// function A(){
//     return obj;
// }
// function B (){
//     return obj;
// }

//  console.log(new A() === new B());


// function Acc(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         this.value ++;
//     }
// }
// let accumulator = new Acc(1);
// accumulator.read();
// accumulator.read()

// accumulator.read()

// accumulator.read()
// console.log(accumulator.value);

// let user = {};
// console.log(user?.address?.street )

// let user = null;

// console.log( user?.address ); // undefined
// console.log( user?.address.street ); // undefined
// let user = null;
// let x = 0;
// user?.SayHi(x++);
// console.log(x);

// let user = { // belongs to another code
//     name: "John"
// };
// let id = Symbol("id");
// user[id] = "Mayukh";
// console.log(user[id]);
// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };

// //for (let key in user) console.log(key); 
// console.log(user[id]);


// let user = {
//     name: "John",
//     money: 1000,
  
//     // for hint="string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },
  
//     // for hint="number" or "default"
//     valueOf() {
//       return this.money;
//     }
  
//   };
//    console.log(user + 100);


//console.log("2" + 2);
// let str = new String()

// str.test = 5;

// console.log(str.test);
//  let num = 255;
//  console.log(num.toString(16));
//console.log( 9999999999999999 ); 
//console.log(isNaN(NaN));
//console.log(isFinite(Infinity));
//console.log(parseInt('12.5.2.2px'));


// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }


// let str = "a123aa";
// console.log(+str.slice(1,4));


// let arr = ["I", "study", "JavaScript"];
// var result = arr.splice(1, 1, "Max", "Max2");
// console.log(arr);
// let arr = ["I", "study", "JavaScript"];
// var result = arr.splice(2, 0, "complex", "language");
// console.log(result);
// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// console.log(arr);
// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(-2));
// let arr = [1, 2];

//   let arrayLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
//   };
// console.log(arr.concat(arrayLike));
// const arr = [NaN];
// console.log(arr.includes(NaN));
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   let user = users.find(item => item.id == 1);
//   let someUsers = users.filter(item => item.id < 3);
//   console.log(someUsers);
// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// countries.sort((a,b) => a > b? 1:-1);
// console.log(countries);
// let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
// console.log(arr);
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum+current, 0);
// console.log(result);
// let arr = [];
// arr.reduce((sum, current) => sum + current);
// console.log(arr);
//  camelize("-webkit-transition")
// function camelize(str){
//     let strArray = str.split("-");
//     let result = strArray.map((word, index) => index == 0? word : word[0].toUpperCase() + word.slice(1)).join('');
//     console.log(result);
// }
// const functionInRange = (arr, a ,b) => {
//     for(let i = 0; i < arr.length ; i++){
//         let val = arr[i];
//         if(val < a || val > b){
//             arr.splice(i, 1);
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// functionInRange(arr, 1, 4); 
// console.log(arr);
// let arr = [1, 2, 3];
// const shuffle = (arr) => {
//     arr.sort(() => Math.random() - 0.8);
// }
// shuffle(arr);
// console.log(arr);
// console.log(arr);
// console.log(arr);
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
//   function groupById(array){
//       return array.reduce((obj, current) => {
//         obj[current.age] = current;
//         return obj;
//       }, {})
//   }
  // function groupById(arr) {
  //     return arr.reduce((obj, current) => {
  //         obj[current.age] = current;
  //         return obj;
  //     }, {})
  // }
  // let usersById = groupById(users);
  // console.log(usersById)

// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); 
// for(let keys of map.entries()){
//     console.log(keys);
// }
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);

// console.log(prices);
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.delete(john);
console.log(set);


// function aclean(arr) {
//     let map = new Map();
//     for(let word of arr){
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }
//     return Array.from(map.values())
// }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   console.log( aclean(arr) );
// const removeAnagram = (arr) => {
//     let map = new Map();
//     for(let i = 0; i < arr.length ; i++){
//         let sorted = arr[i].split('').sort().join();
//         map.set(sorted, arr[i]);
//     }
//     return map.values();
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log( removeAnagram(arr) );
// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();
// console.log(keys);
// let user = {
//     name: "John",
//     age: 30
//   };
//   for(let x of Object.entries(user)){
//       console.log(x);
//   }
// let guest = "Jane";
// let admin = "Pete";
// [guest , admin] = [admin, guest];
// console.log(guest);
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "test1", "test2"];
// console.log(rest.length);
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// console.log(surname);
// let obj = {
//     name: "Max",
//     age: 34,
//     place: "India"
// }

// let {name, ...rest} = obj;
// console.log(rest);
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
//   function printList(list) {

//     console.log(list.value); // output the current item
  
//     if (list.next) {
//       printList(list.next); // do the same for the rest of the list
//     }
  
//   }
  
//   printList(list);
// function f(x) {
//    console.log(x);
//   }
//   const delay = (f , ms) => {
//       return function(){
//           setTimeout(() => f.apply(this, arguments), ms)
//       }
//   }
//   // create wrappers
//   let f1000 = delay(f, 1000);
//   let f1500 = delay(f, 1500);
  
//   f1000("test"); // shows "test" after 1000ms
//   f1500("test"); // shows "test" after 1500ms
// let user = {
//     firstName: "John"
//   };
  
//   function func() {
//     console.log(this.firstName);
//   }
  
//   let funcUser = func.bind(user);
//   funcUser(); 
// let user = {
//     name: "Mayukh",
//     sayHi(){
//         console.log(this.name);
//     }
// }
// let test = user.sayHi.bind(user);
// test();
// var b = 1;
// function outer(){
//    	var b = 4
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)
//     }
//     inner();
// }
// outer();
// let arr = [1,2,3,4,5]
// const x = arr.reduce((a, b) => a+b, 0);
// console.log(x);
// let arr = ["I", "study", "JavaScript"];
// var result = arr.splice(1, 1, "Max", "Max2");
// console.log(arr);


    // function f(x) {
    //    console.log(x);
    //   }
    //   const delay = (f , ms) => {
    //       return function(){
    //           setTimeout(() => f.call(this, "abc"), ms)
    //       }
    //   }
    //   // create wrappers
    //   let f1000 = delay(f, 1000);
    //   let f1500 = delay(f, 1500);
      
    //   f1000("test"); 
    //   f1500("test");

    // let users = [
    //         {id: 'john', name: "John Smith", age: 20},
    //         {id: 'ann', name: "Ann Smith", age: 24},
    //         {id: 'pete', name: "Pete Peterson", age: 31},
    //       ];

    // let res = users.reduce((acc, element) => {
    //     acc[element.id] = element;
    //     return acc;
    // }, {})
    // console.log(res);
    // let john = { name: "John" };

    // let test = john

    // john = null;
    // console.log(test);
    // let map = new Map();
    // let john = { name: "John" };
    // map.set(john, "Hello");
    // john = null;
    // console.log(map.get(john))


    // let map = new WeakMap();
    // let john = { name: "John" };
    // map.set(john, "hello");
    // john = null;
    // console.log(map.get(john));

//     let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
//console.log(visitedSet.has(john)); // true

// check if Mary visited?
//console.log(visitedSet.has(mary)); // false

// john = null;
// console.log(visitedSet);

// var car = Object.create({name: "Mayukh", model: "Tesla"});

// delete car.__proto__.model
// console.log(car.model);
// let arr = [1,2,3,4,5];
// arr.length = 2;
// console.log(arr[3])
// let a = {name: "xx"};
// let b = a;
// a = null;
// console.log(b);
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 + i);
//   }
// for(var i = 0; i < 10; i++){
//     setTimeout(function(input){
//         return function(){
//             console.log(input);
//         }
//     }(i), 1000)
// }
// let timerID = setTimeout(() => {console.log("test")}, 1000);
// clearTimeout(timerID);
// let timerID = setTimeout(function test(){
//     console.log("test");
//     setTimeout(test, 1000)
// }, 2000)


// const timeoutPractice = (from , to) => {
//     let current = from;
//     setTimeout(function go(){
//         console.log(current);
//         if(current < to){
//             setTimeout(go, 1000)
//         }
//         current++;
//     }, 1000)
// }

// timeoutPractice(3, 8);

// const timeoutPractice = (from , to) => {
//     let current = from ; 
//     let timerID = setInterval(() => {
//         console.log(current);
//         if(current === to){
//             clearInterval(timerID)
//         }
//         current ++;
//     }, 1000)
// }

// timeoutPractice(3, 8);
// const str = "abcd";
// console.log(str.substring(1,2));
// let vSet = new Set();
// const explore = (num) => {
//   if(vSet.has(num)) return false;
//   for(let i = 0; i< 20; i++) {
//     vSet.add(i);
//     explore(i)
//   }
//   return true;
// }

// console.log(explore(20));