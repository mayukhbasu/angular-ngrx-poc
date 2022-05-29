// console.log("Hello Mayukh");
// const child = document.querySelector('#c1');
// child.addEventListener('click', () => {
//     console.log("Child Called");
// });

// const parent = document.querySelector('#p1');
// parent.addEventListener('click', () => {
//     console.log("Parent called");
// }, true)
// console.log(navigator.platform);
// let data = 10;
// debugger;
// console.log(document.getElementById("p2"))
// document.getElementById("p2").innerHTML = "Test"
// const inputBox = document.querySelector("input");
// console.log(inputBox.getAttribute('value'));
// inputBox.value = "New Test";
// console.log(inputBox.value);
// "use strict"
// const object1 = {  
//     property1: 22  
//   };  
//   const object2 = Object.freeze(object1);  
//   object2.property1 = 33;  
//   // Throws an error in strict mode  
//   console.log(object2.property1);  
// "use strict"
// const obj1 = {
//     prop1: "test"
// }

// Object.seal(obj1);
// obj1.prop1 = "New Test";
// obj1.prop2 = "Hello"
// console.log(obj1);
// function debouce(func, timeout = 300) {
//     let timer;
//     return () => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {func()}, timeout)
//     }
// }

// function saveInput(){
//     console.log('Saving Data');

// }

// const processChange = debouce(() => saveInput());
// const input = document.querySelector('input');
// const defaultText = document.getElementById("default")
// const debounceText = document.getElementById("debounce")
// const throttleText = document.getElementById("throttle")

// const updateDebounceText = debounce(() => debounceText.textContent 
// = e.target.value);
// input.addEventListener('input', e => {
//     defaultText.textContent = e.target.value;
//     updateDebounceText(e.target.value);
// });

// function debounce(cb, delay = 1000) {
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout);
//         timeout =  setTimeout(() => {
//             cb(...args)
//         }, delay)
//     }
// }
//Debounce
// function debounce(func, timeout = 500) {
    
//     let timer;
//     return (...args) => {
//         clearInterval(timer);
//         timer = setTimeout(() => {
//             func.apply(this, args);
//         }, timeout)
//     }
//   }
//   function test(){
//       console.log("Test Called");
//   }
//   const processChange = debounce(() => test());

//Throttle
// const throttle = (func, limit) => {
//     let throttleFlag;
//     return (...args) => {
//         if(!throttleFlag) {
//             func.apply(this, args);
//             throttleFlag = true;
//             setTimeout(() => throttleFlag = false, limit);
//         }
//     }

// }
// window.addEventListener("resize", () => {
//     throttle(throttle, 1000);
//   });
// const text = document.querySelector("input");
// console.log(text);
// text.addEventListener("input", e => {
//     console.log(text.value);
//     console.log(text.getAttribute('value'))
// })