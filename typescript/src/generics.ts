// const printData = <T extends boolean>(data: T) => {
//   console.log(data);
// }

// printData(2);
// printData("hello");
// printData(true);

// const printFn = <X,Y>(value1: X, value2: Y) => {
//   console.log(value1, value2);
// }

// printFn("Hello", "World");
// printFn(123, ["Hi", 123]);

// interface UserData<X extends string,Y extends number> {
//   name: X;
//   age: Y
// }

// const user: UserData<string, number> = {
//   name: 'Max',
//   age: 35
// }
// Generic Function to Reverse an Array

// Write a generic function that 
// can reverse any array, whether it's an array of numbers, 
// strings, or any other type.

// const reverseArray = <T>(arr: T[]): T[] => {
//   return arr.reverse();
// }

// const arr = [1,2,3,4,5];
// console.log(reverseArray(arr));

// interface KeyValueStore<T> {
//   [key: string]: T
// }

// const testObj: KeyValueStore<number> = {
//   'key': 120
// }

// console.log(testObj.key);

// const mergeTwoObjects = <T extends object>(obj1: T, obj2: T): T => {
//   return {...obj1, ...obj2};
// }

// const obj1 = { x: 1, y: 2 };
// const obj2 = { x: 3, y: 4 };
// console.log(mergeTwoObjects(obj1, obj2));

// type StringToObject<T> = {[key:string]: T};
// const test: StringToObject<number> = {
//   key: 1
// }
//Object inversion
//Readonly Type

// type Read<T> = {
//   [P in keyof T]: T[P]
  
// }

// interface Student {
//   name: string;
//   age: number;
// }

// const readOnyperson: Read<Student> = {
//   name: "Max",
//   age: 30
// }

// interface Student {
//   email: string;
//   password: string;
//   username: string;
// }

// type PickStudent = Pick<Student, 'email' | 'username'>;
// const stPreview: PickStudent = {
//   email: "",
//   username: ""
// } 
// interface TestI<T> {
//   [key: string | number]: T;
  
// }

// const updateUser = (id: number, user: Partial<User<string>>) => {
//   console.log(user);
// }

// updateUser(1, {age: 10});

// type LengthOrValue<T> = T extends string ? number : T;

// const getLengthOrValue = <T>(input: T): LengthOrValue<T> => {
//   if(typeof input === 'string') return input.length as any
//   return input as any
// }
// const stringLength = getLengthOrValue("Hello");  // returns 5 (number)
// const numberValue = getLengthOrValue(123);      

// function getLengthOrValue<T>(input: T): LengthOrValue<T> {
//   if (typeof input === 'string') {
//       return input.length as any; // casting is necessary here to satisfy TypeScript
//   }
//   return input;
// }
