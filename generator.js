// function* simplegenerator() {
//     console.log("before 1")
//     yield 1;
//     console.log("After 1");
//     console.log("before 2")
//     yield 2;
//     console.log("after 2");
//     console.log("before 3");
//     yield 3;
//     console.log("after 3");
// }


// const genObject = simplegenerator();
// console.log(genObject.next())
// console.log(genObject.next())

// const genObject2 = simplegenerator();
// console.log(genObject2.next())
// console.log(genObject2.next())

function* generateID() {
    let id = 1;
    while(true) {
        yield id;
        id ++
    }
}
const idGen = generateID();
console.log(idGen.next())
console.log(idGen.next())
console.log(idGen.next())

function* generate(){
  let id = 1;
  while(true){
    yield id;
    id++;
  }
}
const idObject = generate();
console.log(idObject.next());
console.log(idObject.next());
console.log(idObject.next());
console.log(idObject.next());
// const obj = genObject.next();
// console.log(genObject.next());
// console.log(genObject.next())
// console.log(genObject.next())
// console.log(genObject.next())
// console.log(genObject.next())

// function delay() {
//     return new Promise(resolve => setTimeout(resolve, 2000));
//   }
  
//   async function delayedLog(item) {
//     await delay();
//     console.log(item);
//   }
  
//   async function processArray(array) {
//     array.forEach(async item => {
//        await delayedLog(item);
//     })
//   }
  
//   processArray([1, 2, 3, 4]);
// const [x, ...y] = [1, 2, 3, 4];
// console.log(x, y);

// function* myGenFunc() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   var myGenObj = new myGenFunc();
//   console.log(myGenObj.next().value);
// function* yieldAndReturn() {
//     yield 1;
//     return 2;
    
//   }
  
//   var myGenObj = yieldAndReturn();
//   console.log(myGenObj.next());
//   console.log(myGenObj.next());
//   console.log(myGenObj.next());
