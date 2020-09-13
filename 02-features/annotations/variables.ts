// 다른 값을 할당하려하면 에러가 뜸
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
// declaration initialization이 한 줄에 있을 경우, 타입스크립트가 타입을 유추할 수 있음

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  // 아무것도 반환하지 않으므로 void
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// JSON은 다양한 내용이 올 수 있기 때문에, 타입스크립트는 any로 추측함
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20}

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we want to variable to have a type
// that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
