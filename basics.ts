// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives
let age: number;
age = 1.12;

let userName: string;
userName = "name";

let isTinstructor: boolean;
isTinstructor = true;

//More complex types
let hobbies: string[];
hobbies = ["1", "2", "3"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Max",
  age: 32,
};
// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = "React = The Complete Guide";

// course = 12341;
