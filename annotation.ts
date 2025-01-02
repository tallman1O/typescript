// {Annotation - Annotations in TypeScript are a way to explicitly declare types for variables, function parameters, return values, and other program elements. They help provide type safety and better tooling support}.
// Variable annotations
let myName: string = "John";
let age: number = 25;
let isActive: boolean = true;

// Array annotations
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

//Mutidimensional Array
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// Parameter and return type annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Optional parameter annotation
function logMessage(message: string, userId?: number): void {
  console.log(message);
}

// Object type annotation
let firstUser: { name: string; age?: number } = {
  name: "John",
  age: 25,
};

//Default value annotation
function greetUser(name: string = "John"): string {
  return `Hello, ${name}!`;
}

const res = greetUser();
console.log(res);

// Interface annotation
interface User {
  name: string;
  age: number;
}
