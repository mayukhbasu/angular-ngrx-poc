// const mergeWithSelectedKeys = <U, V extends Object, T extends keyof V>(obj1: U, obj2: V, keys: T[]) => {
//   const selectedObject = keys.reduce((obj, key) => {
//     if(key in obj2) {
//       obj[key] = obj2[key];
//     }
//     return obj;
//   }, {} as Pick<V, T>);
//   return {...obj1, ...selectedObject}
// }
// // Example usage
// const obj1 = { name: 'John', profession: 'Developer' };
// const obj2 = { age: 30, hobby: 'Reading', profession: 'Writer' };

// let result = mergeWithSelectedKeys(obj1, obj2, ['age', 'profession']);
// console.log(result); // Output: { name: 'John', profession: 'Writer', age: 30 }

//-----------------------------------------

// const filterObjectProperties = <U extends object, K extends keyof U>(data: U, predicate: (key: K, value: U[K]) => boolean) => {
//   return Object.keys(data).reduce((acc, key) => {
//     const typedKey = key as K;
//     if(predicate(typedKey, data[typedKey])) {
//       acc[typedKey] = data[typedKey];
      
//     }
//     return acc;
//   }, {} as Partial<U>)
// }
// const data = {
//   name: 'John Doe',
//   age: 30,
//   profession: 'Developer',
//   salary: 80000
// };
// const filteredData = filterObjectProperties(data, (key, value) => typeof value === 'number');
// console.log(filteredData); // Output: { age: 30, salary: 80000 }

//------------------------------------------------------------------------

// const mapObjectProperties = <T extends object, K extends keyof T>(user: T, mapper: (key: K, value: T[K]) => number):  { [P in K]: number } => {
//   return Object.keys(user).reduce((acc, key) => {
//     let typedKey = key as K;
//     let result = mapper(typedKey, user[typedKey]);
//     acc[typedKey] = result;
//     return acc;
//   }, {} as { [P in K]: number })
// }

// const user = {
//   id: 1,
//   name: "John Doe",
//   email: "john@example.com"
// };

// const lengthMap = mapObjectProperties(user, (key, value) => value.toString().length);
// console.log(lengthMap); // Output: { id: 1, name: 8, email: 15 }

// const transformObjectKeys = (user: T, transform: (key: K) => )

// const user = {
//   id: 1,
//   firstName: "John",
//   lastName: "Doe"
// };

// const transformedUser = transformObjectKeys(user, key => `user_${key}`);
// console.log(transformedUser); 
// Output: { user_id: 1, user_firstName: "John", user_lastName: "Doe" }