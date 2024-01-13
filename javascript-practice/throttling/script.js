// // function throttle(func, delay) {
// //   let lastCalled = 0;
// //   return function(...args) {
// //     const now = Date.now();
// //     if(now - lastCalled >= delay) {
// //       func.apply(this, args);
// //       lastCalled = now;
// //     }
// //   }
// // }

// // function handleScroll() {
// //   console.log("Handle scroll");
// // }

// // const throttleScroll = throttle(handleScroll, 200);

// // window.addEventListener('click', throttleScroll);

// function throttle(func, wait) {
//   let lastCalled = 0;
//   return function(...args) {
//     let now = Date.now();
//     if(now - lastCalled >= wait) {
//       func.apply(this, args);
//       lastCalled = now;
//     }
//   }
// }

// function clickThrottle() {
//   console.log("Click event");
// }

// const clickEvent = throttle(clickThrottle, 2000);
// window.addEventListener('click', clickEvent);

let map = new Map();

// Setting key-value pairs in the Map
map.set('apple', 500);
map.set('banana', 300);
map.set('orange', 200);
console.log(map.size)
for(const [key , value] of map) {
  console.log("Key is "+key+'  '+"Value is "+value);
}