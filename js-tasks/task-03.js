//Task 1: Find the smallest integer in the array
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(myArray) {
        return Math.min(...myArray);
    }
}

//Task 2: Geometry Basics: Circle Circumference in 2D
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}

// Task 3: Loop statement --for..in and for..of
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
    let arrayForResult = [];
    for (const key in obj) {
      if (key.length === 5) {
        arrayForResult.push(key);
      }
      if (obj[key].length === 5) {
        arrayForResult.push(obj[key]);
      }
    }
    return arrayForResult;
}
  
//Advanced task: Animals and Inheritance
//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age);
      this.legs = 0;
      this.species = "shark";
      this.status = status;
    }
}
  
class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age);
      this.legs = 4;
      this.species = "cat";
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}
  
class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age);
      this.legs = 4;
      this.species = "dog";
      this.status = status;
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
}
  
//Advanced task: Understanding closures - the basics
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(number) {
  let result = [];

  for (let i = 0; i < number; i++) {
    result.push(function(value) {
        return function() {
          return value;
        };
    })(i);
  }
  return result;
}
