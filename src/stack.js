const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {//Declare a class named Stack
  constructor(){ //Build an constructor for the global object
    this.elements = [];//Create an array for the elements where it will store the info and elements
  }
  push(element) {
    this.elements.push(element) //Here I did an implimentation of method push which takes the element to the end of the array elements
  }

  pop() {
    if (this.elements.length === 0) {
      return null;
    }
    return this.elements.pop();//Here I did an pop method which tales the last element from the array elements
  }

  peek() {
    if (this.elements.length === 0) {
      return null;
    }
    return this.elements[this.elements.length - 1];//Here I return the last element in the stack which I do find by .length-1
  }
}

module.exports = {
  Stack
};
