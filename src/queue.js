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
class Queue {
  constructor(){
    this.elements = [];
  }

  getUnderlyingList() {
    let list = null;
    for (let i = this.elements.length - 1; i >= 0; i--) {
      list = {value: this.elements[i], next: list};
    }
    return list;
  }

  enqueue(value) {
    this.elements.push(value);
  }

  dequeue() {
    if (this.elements.length === 0) {
      return null;
    }
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
