// function merge<U, V>(obj1: U, obj2: V):U {
//   return {...obj1, ...obj2}
// }


// let result = merge({ name: 'John' }, { age: 30 });
// console.log(result)

function loggingIntentity<T extends {length: number}>(args: T): T {
  console.log(args.length);
  return args;
}

console.log(loggingIntentity({length: 10}))