function identity<T>(args: T): T {
  return args
}

console.log(identity<string>("Hello world")) // hello world
console.log(identity<string>(2)) // compile error
console.log(identity<number>(2))// 2
console.log(identity<number>("Hello world")) // compile error