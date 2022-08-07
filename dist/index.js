"use strict";
// Basic Types
let id = 5;
let company = 'Josh Anaba';
let isPublished = true;
let x = 'Hello';
x = 5; // reassigned to another type becasue the type says any
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'yes', true];
// Tuple: you can specifiy the exact types inside the array
let person = [1, 'Yo', true];
// Tuple Array
let employee;
employee = [
    [1, 'Josh'],
    [2, 'Anaba'],
    [3, 'Chi'],
];
//Union allows us to have more than one types to a variable
let pid;
pid = '22'; // or 22
// Enum allows us to define a set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 2,
    name: 'Josh'
};
// Type Assertion
let cid = 1;
// even though cid is of any type, the specification (type assertion) still sets customerId to type number only
// let customerid = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 2,
    name: 'Josh',
    readOnlyId: 2
};
const p1 = 1;
user1.id = 5;
// Applications of interfaces
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// class implementing an interface
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Classes; implement interfaces w classes
// class Person {
//   // Access or Data modifiers private, protected and public
//   // private id: number
//   // protected id: number
//   // public id: number
//   id: number
//   name: string
//   constructor (id: number, name: string) { // a constructor will run whenever an object is instantiated from that class
//     this.id = id
//     this.name = name
//   }
//   register () {
//     return `${this.name} is now registered`
//   }
// }
// const brad = new Person(1, 'brad')
// const mike = new Person(2, 'mike')
// A sub class of Person
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Josh', 'Developer');
// Generics are used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Josh', 'Brad', 'Elv']);
numArray.push(4);
//# sourceMappingURL=index.js.map