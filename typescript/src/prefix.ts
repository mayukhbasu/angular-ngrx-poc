// type Prefix<T, P extends string> = {
//   [K in keyof T as `${P}_${string & K}`]: T[K]
// };


// type A = Prefix<{
//   a: 'bfe',
//   b: 'dev'
// }, 'BFE'>

// const obj: A = {
//   'BFE_a': 'bfe',
//   'BFE_b': 'dev'
// };

// console.log(obj.BFE_a)
type Prefix<T, P extends string> = {
  [K in keyof T as `${P}_${string & K}`]: T[K]
}
type A = Prefix<{
  a: 'dev',
  b: 'QA'
}, 'ABC'>

const newObj: A = {
  ABC_a: "dev",
  ABC_b: "QA"
}