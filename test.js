// let x = 1;
// const parentFunction  = () => {
//     let myValue = 2;
//     console.log(x);
//     console.log(myValue);

//     return  childFunction = () => {
//         console.log(x+=5);
//         console.log(myValue += 1);
//     }

    
// }

// const result = parentFunction();
// result();
// result();
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

// Object.setPrototypeOf(musician, person);

// const guitarist = {
//     strings: 6,
//     __proto__: musician
// }

// console.log(guitarist.alive);
// let key = "likes birds";
// let user = {}
// user[key] = true;
// console.log(user);
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
  };

  for(let code of codes){
      console.log(code);
  }