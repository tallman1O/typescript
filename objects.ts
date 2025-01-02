//Objects - Objects in TypeScript are similar to JavaScript objects - they are collections of key-value pairs where values can be of different types. However, TypeScript adds static typing to objects, making them more robust and predictable.

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

interface person2Interface {
  firstName: string;
  lastName: string;
  age: number;
}

const person2: person2Interface = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
};
