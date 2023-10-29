type Person = {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;

const printValue = (keys: PersonKeys) => {
  const person = {
    name: 'Bison',
    age: 40
  }
  console.log(person[keys]);
}

printValue('age');
printValue('name');