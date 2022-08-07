// Basic Types
let id: number = 5
let company: string = 'Josh Anaba'
let isPublished: boolean = true
let x: any = 'Hello'
x = 5  // reassigned to another type becasue the type says any
let ids: number[] = [1,2,3,4,5]
let arr: any = [1, 'yes', true]

// Tuple: you can specifiy the exact types inside the array

let person: [number, string, boolean] = [1, 'Yo', true]

// Tuple Array

let employee: [number, string][]

employee = [
  [1, 'Josh'],
  [2, 'Anaba'],
  [3, 'Chi'],
]

//Union allows us to have more than one types to a variable
let pid: string | number

pid = '22' // or 22

// Enum allows us to define a set of named constants

enum Direction1 {
  Up, Down, Left, Right
}

enum Direction2 {
  Up = 'Up', Down = 'Down', Left = 'Left', Right = 'Right'
}

// Object
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 2,
  name: 'Josh'
}

// Type Assertion
let cid: any = 1
// even though cid is of any type, the specification (type assertion) still sets customerId to type number only
// let customerid = <number>cid
let customerId = cid as number

// Functions
function addNum (x: number, y: number): number { // the params won't return error if the noImplicit any line in tsconfig.json is activated
  return x + y
}
// Void
function log(message: string | number):void {
  console.log(message)
}

// Interfaces can be used in a similar way as type in line 40

interface UserInterface {
  id: number
  readonly readOnlyId?: number // cannot be reassignable like id
  name: string
  // returns error if without a question mark (optional)
  age?: number
}

const user1: UserInterface = {
  id: 2,
  name: 'Josh',
  readOnlyId: 2
}

// A type can be used with primitives and unions, but interfaces cannot

type Point = number | string

const p1: Point = 1

user1.id = 5
// cannot be reasignable
// user1.readOnlyId = 5

// Interfaces w functions

interface MathFunc {
  (x: number, y: number): number
}

// Applications of interfaces
const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// class implementing an interface
class Person implements PersonInterface {
  id: number
  name: string

  constructor (id: number, name: string) {
    this.id = id
    this.name = name
  }

  register () {
    return `${this.name} is now registered`
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
  position: string

  constructor (id: number, name: string, position: string) {
    super (id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Josh', 'Developer')


// Generics are used to build reusable components

function getArray<T> (items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Josh', 'Brad', 'Elv'])

numArray.push(4)