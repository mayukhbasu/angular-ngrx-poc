// Write a function createHelloWorld. 
//It should return a new function that always returns "Hello World".

// const createHelloWorld = () => {
//   return (...args) => "Hello World"
// }

// const f = createHelloWorld();
// console.log(f());

// Given an integer n, return a counter function. This counter function initially 
// returns n and then returns 1 more 
// than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// const createCounter = (num) => {
//   let count = 0;
//   return () => num + (count++);
// }

// const counter = createCounter(10);
// console.log(counter());
// console.log(counter())
// console.log(counter())
// console.log(counter());

// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two 
// values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".

// const expect = (val) => {
//   return {
//     toBe: (val1) => {
//       if(val === val1) return true;
//       else throw new Error("Not Equal");
//     },
//     notToBe: (val3) => {
//       if(val !== val3) return true;
//       else throw new Error("Equal");
//     }
//   }
// }

// console.log(expect(5).notToBe(5));

// Write a function createCounter. It should accept an initial integer init. 
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// const createCounter = (num) => {
//   let temp = num;
//   return {
//     increment: () => {
//       temp = temp + 1;
//       return temp;
//     },
//     decrement: () => {
//       temp = temp - 1;
//       return temp;
//     },
//     reset: () => {
//       temp = num;
//       return temp
//     }
//   }
// }

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset())

// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

//composition of function of from right to left
// const compose = (...funcs) => {
//   return (args) => {
//     return funcs.reduceRight((value, func) => {
//       return func(value)
//     }, args)
//   }
// }

// // Example:
// const f1 = x => x + 1;
// const f2 = x => x * 2;
// const f3 = x => x - 3;

// const fn = compose(f1, f2, f3);
// console.log(fn(4));  // Outputs: 3

// Given a function fn, return a new function that 
// is identical to the original function except that it 
// ensures fn is called at most once.

// const once = (func) => {
//   let called = false;
//   let result;
//   return (...args) => {
//     if(!called) {
//       called = true;
//       result = func(args);
//     }
//     return result;
//   }
// }

// const logOnce = once((message) => {
//   console.log(message);
//   return message;
// })

// logOnce("hello");
// logOnce("world");

//memoize a function

// const memoize = (fn) => {
//   const cache = new Map();
//   return (...args) => {
    
//     const key = JSON.stringify(args);
//     if(cache.has(key)) {
//       return cache.get(key);
//     }
//     const result = fn(...args);
//     console.log(...args)
//     cache.set(key, result);
//     return result;
//   }
// }

// const factorial = memoize((n) => {
//   //console.log(`Computing factorial for ${n}`);  // This will help us see if the function is computed or retrieved from cache
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// });

// console.log(factorial(5));  // Computes and logs: Computing factorial for 5, 4, 3, 2, 1
// console.log(factorial(5));  // Retrieves from cache, no computation logs
// console.log(factorial(6)); 

// Given two promises promise1 and promise2, return a new promise. promise1 
// and promise2 will both resolve 
// with a number. The returned promise should resolve with the sum of the two numbers.

// let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
// let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

// Promise.all([promise1, promise2]).then(result => console.log(result[0] + result[1]))
// .catch(err => console.log(err))

// Given a positive integer millis, write an asynchronous
//  function that sleeps for millis milliseconds. It can resolve any value.

// const sleep = (millis) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, millis)
//   })
// }

// Given a function fn, an array of arguments 
// args, and a timeout t in milliseconds, return a cancel function cancelFn.

// const delayedCall = (fn, args, t) => {
//   const timeoutId = setTimeout(() => {
//     fn(...args);
//   }, t);
//   const cancelFn = () => {
//     clearTimeout(timeoutId);
//   }
//   return cancelFn;
// }
// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// }
// const cancel = delayedCall(sayHello, ['Mayukh'], 1000);
// cancel();

// Given a function fn,
//  an array of arguments args, and an interval time t, 
//  return a cancel function cancelFn.
// const delayedFunction = (fn,args, time) => {
//   const intervalId = setInterval(() => {
//     fn(...args);
//   }, time);
//   const cancelFn = () => {
//     clearInterval(intervalId);
//   }
//   return cancelFn;
// }

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// }

// const cancel = delayedFunction(sayHello, ['Mayukh'], 1000);
// setTimeout(() => {
//   cancel();
// }, 4001)

// Given an asynchronous function fn and a time t in milliseconds, return a new time limited 
// version of the input function. fn takes arguments provided to the time limited function.

// const timeLimit = (fn, time) => {
//   return (args) => {
//     const fnPromise = fn(...args);
//     const timeoutPromise = new Promise((_, reject) => {
//       setTimeout(() => reject("Time limit exceeded"), time);
//     });
//     return Promise.race([fnPromise, timeoutPromise])
//   }
// }

//  const slowFunction = (data) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(`Processed ${data}`)
//     }, 1000)
//   })
// };
// const limitedTimeFunction = timeLimit(slowFunction, 500);
// limitedTimeFunction("sample data")
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);  // This will log: "Time Limit Exceeded" because the function takes longer than the 500ms limit
//     });

// Given an array of asynchronous functions functions, return a new promise promise. 
// Each function in the 
// array accepts no arguments and returns a promise. 
// All the promises should be executed in parallel.
// const executeFunctionsInParallel = (funcs) => {
//   const promises = funcs.map((func) => func());
//   return Promise.all(promises);
// }

// let asyncFunctions = [
//   () => new Promise(resolve => setTimeout(() => resolve('Result 1'), 1000)),
//   () => new Promise(resolve => setTimeout(() => resolve('Result 2'), 500)),
//   () => new Promise(resolve => setTimeout(() => resolve('Result 3'), 750))
// ];

// executeFunctionsInParallel(asyncFunctions).then(results => {
//   console.log(results);
// })

// Given an array arr and a chunk size size, return a chunked array.
//  A chunked array contains the original elements in arr, 
//  but consists of subarrays each of length size. The 
// length of the last subarray may be less than size 
// if arr.length is not evenly divisible by size.

const chunkArray = (arr = [], size) => {
  const chunked = [];
  for(let i = 0; i < arr.length; i = i+ size) {
    let chunk = arr.slice(i, i + size)
    chunked.push(chunk);
  }
  return chunked
}

const arr = [1,2,3,4,5,6,7,8,9]
//o/p: [[1,2,3,4],[5,6,7,8],[9]]


// Write code that enhances all arrays such that you can 
// call the array.groupBy(fn) method on any array and it will 
// return a grouped version of the array.
Array.prototype.groupBy = function(fn) {
  const grouped = {};
  for(let item of this) {
    const key  = fn(item);
    if(!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
  }
  return grouped;
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 }
];

const groupedByAge = people.groupBy(person => person.age);
console.log(groupedByAge);

//flatten deeply nested array

// const flatten  = (arr) => {
//   let results = [];
//   for(let item of arr) {
//     if(Array.isArray(item)) {
//       results = results.concat(flatten(item));
//     } else {
//       results.push(item);
//     }
//   }
//   return results;
// }

// const nestedArray = [1, [2, 3, [4, 5, [6, 7]]], [8, 9]];
// const flattened = flatten(nestedArray);
// console.log(flattened); 

// Here's a possible implementation of the EventEmitter 
// class based on the requirements:

// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }

//   subscribe(eventName, callback) {
//     if(!this.events[eventName]) this.events[eventName] = [];
//     this.events[eventName].push(callback);
//     return {
//       unsubscribe: () => {
//         const index = this.events[eventName].indexOf(callback);
//         if(index !== - 1) this.events[eventName].splice(index , 1);
//         return undefined;
//       }
//     }
//   }

//   emit(eventName, args) {
//     if(!this.events[eventName] || this.events[eventName].length === 0) return [];
//     console.log(this.events)
//     return this.events[eventName].map(callback => callback(...args));
//   }
// }

// const emitter = new EventEmitter();

// const sub1 = emitter.subscribe('data', data => `Received ${data}`);
// const sub2 = emitter.subscribe('data', data => `Processed ${data}`);

// console.log(emitter.emit('data', ['Hello'])); // ['Received Hello', 'Processed Hello']

// sub1.unsubscribe();

// console.log(emitter.emit('data', ['World'])); // ['Processed World']

// Given an object or array obj, return a compact object.
//  A compact object is the same as the original object, 
//  except with keys containing falsy values removed. 
//  This operation applies to the object and any nested objects. 
//  Arrays are considered objects where the indices are keys. 
//  A value is considered falsy when Boolean(value) returns false.

//You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// function compact(obj) {
//   // Base case: if obj is not an object or array, return obj directly
//   if (obj === null || typeof obj !== 'object') {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     // Handle arrays: filter out falsy values and compact each item
//     return obj
//       .map(item => compact(item))
//       .filter(Boolean);
//   } else {
//     // Handle objects: remove keys with falsy values and compact each value
//     let result = {};
//     for (let key in obj) {
//       if (Boolean(obj[key])) {
//         result[key] = compact(obj[key]);
//       }
//     }
//     return result;
//   }
// }


// // Test cases
// console.log(compact({ a: 0, b: { c: '', d: 'test', e: null, f: { g: false, h: 'value' } }, 
// i: [1, 0, false, '', 'yes']}));
// // Expected output: { b: { d: 'test', f: { h: 'value' } }, i: [1, 'yes'] }

// console.log(compact([0, 1, '', false, 'test', { a: 0, b: 'yes' }]));
// // Expected output: [1, 'test', { b: 'yes' }]

//custom map implementation
// if (!Array.prototype.customMap) {
//   Array.prototype.customMap = function(callback) {
//       // 'this' refers to the array on which customMap is called
//       const result = [];

//       for (let i = 0; i < this.length; i++) {
//           result.push(callback(this[i], i, this));
//       }

//       return result;
//   };
// }

// Example usage:
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.customMap(num => num * 2);
// console.log(doubled);  // [2, 4, 6, 8]

// const createToggle = (onState, offState) => {
//   let defaultState = onState;
//   return {
//     toggle() {
//        defaultState = defaultState === onState ? offState : onState;
//     },
//     getState() {
//       return defaultState;
//     },
//     reset() {
//       return onState;
//     }
//   }
// }

const lightSwitch = createToggle('ON', 'OFF');

console.log(lightSwitch.getState());  // "ON"
lightSwitch.toggle();
console.log(lightSwitch.getState());  // "OFF"
lightSwitch.toggle();
console.log(lightSwitch.getState());  // "ON"
lightSwitch.reset();
console.log(lightSwitch.getState());  // "ON"

// const test = () => {
//   console.log(this)
// }

// test()










