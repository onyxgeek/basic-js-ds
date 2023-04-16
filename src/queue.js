const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// Define a class called Queue
class Queue {
  // Define the constructor method that will be called when a new instance is created
  constructor(){
    // Initialize the 'elements' property of the instance to an empty array
    this.elements = [];
  }

  // Define a method called 'getUnderlyingList' that returns a linked list representation of the queue
  getUnderlyingList() {
    // Initialize the 'list' variable to null
    let list = null;
    // Iterate over the elements of the queue in reverse order
    for (let i = this.elements.length - 1; i >= 0; i--) {
      // Create a new object with a 'value' property equal to the current element and a 'next' property equal to the current value of 'list'
      list = {value: this.elements[i], next: list};
    }
    // Return the 'list' object representing the queue as a linked list
    return list;
  }

  // Define a method called 'enqueue' that adds a new element to the end of the queue
  enqueue(value) {
    // Add the 'value' parameter to the end of the 'elements' array
    this.elements.push(value);
  }

  // Define a method called 'dequeue' that removes and returns the first element from the front of the queue
  dequeue() {
    // If the 'elements' array is empty, return null
    if (this.elements.length === 0) {
      return null;
    }
    // Otherwise, remove and return the first element of the 'elements' array
    return this.elements.shift();
  }
}



const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.dequeue(); // returns 1
queue.getUnderlyingList(); // returns { value: 3, next: null }


module.exports = {
  Queue
};
