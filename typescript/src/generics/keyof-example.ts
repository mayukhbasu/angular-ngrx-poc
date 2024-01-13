interface PersonNew {
  name: string,
  age: number,
  email: string;
}

type PersonNewKeys = keyof PersonNew;

function getPersonProperty(person: PersonNew, keys: PersonNewKeys): string | number {
  return person[keys];
}

const aliceNew: PersonNew = {
  name: "aliceNew",
  age: 30,
  email: "aliceNew@example.com"
};

// Valid usage
const aliceName = getPersonProperty(aliceNew, "name");
console.log(aliceName); // Output: Alice

const aliceAge = getPersonProperty(aliceNew, "age");
console.log(aliceAge); // Output: 30
//const unknownProperty = getPersonProperty(aliceNew, "salary"); // Error: Argument of type '"salary"' isn't assignable to parameter of type '"name" | "age" | "email"'.
