//Symbols are new primitive type , it is unique and cannot be changed,
//Its main motivation is to provide private variable that does not conflict with the name
// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

// console.log(value1 === value2);
//Even though symbols having same value they are different

//Creating symbol
// const x = Symbol();
// console.log(typeof x);

// const x = Symbol("Tekken")
// console.log(x);

//Access Symbol Description
// const x = Symbol('hey');
// console.log(x.description); 

//Symbols are not included in for...in
// let id = Symbol("id");
// let person = {
//     name: "Jack",
//     [id]: 1
// }

// for(let key in person){
//     console.log(key)
// }
// console.log(person);

let person = {
    name: "Jack"
};

let id = Symbol("id");

person[id] = "Another value";
console.log(person);
person.id = 12;
console.log(person);