const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// Define a Node class with a constructor that takes in data and initializes left and right to null
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Define a BinarySearchTree class with a constructor that initializes _root to null
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  // Define a root method that returns the _root property
  root() {
    return this._root;
  }

  // Define an add method that takes in data, creates a new node with the data, and adds it to the tree in the appropriate position
  add(data) {
    // Create a new node with the data
    const node = new Node(data);
    // If the root is null, set the root to the new node
    if (this._root === null) {
      this._root = node;
    } else {
      // Otherwise, traverse the tree to find the appropriate position for the new node
      let current = this._root;
      while (true) {
        if (data < current.data) {
          // If the data is less than the current node's data, go left
          if (current.left === null) {
            // If the left child is null, set the new node as the left child
            current.left = node;
            break;
          }
          current = current.left;
        } else if (data > current.data) {
          // If the data is greater than the current node's data, go right
          if (current.right === null) {
            // If the right child is null, set the new node as the right child
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          // If the data is equal to the current node's data, break out of the loop (no duplicates allowed)
          break;
        }
      }
    }
  }

  // Define a has method that takes in data and returns true if the tree contains a node with that data, false otherwise
  has(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) {
        // If the data matches the current node's data, return true
        return true;
      } else if (data < current.data) {
        // If the data is less than the current node's data, go left
        current = current.left;
      } else {
        // If the data is greater than the current node's data, go right
        current = current.right;
      }
    }
    // If we reach the end of the tree and haven't found the data, return false
    return false;
  }

  // Define a find method that takes in data and returns the node with that data if it exists in the tree, null otherwise
  find(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) {
        // If the data matches the current node's data, return the current node
        return current;
      } else if (data < current.data) {
        // If the data is less than the current node's data, go left
        current = current.left;
      } else {
        // If the data is greater than the current node's data, go right
        current = current.right;
      }
    }
    // If we reach the end of the tree and haven't found the data, return null
    return null;
  }

  remove(data) {
      // Remove the node with the given data from the tree.
      // Set the root of the tree to the new root returned by _removeNode.
      this._root = this._removeNode(this._root, data);
    }

    _removeNode(node, data) {
      // Helper function to remove the node with the given data from the tree.
      // Recursively search for the node to remove and handle different cases for node deletion.
      // Return the new root of the subtree after deletion.
      if (node === null) {
        // If the node is null, return null.
        return null;
      }
      if (data === node.data) {
        // If the data matches the current node's data:
        if (node.left === null && node.right === null) {
          // If the node has no children, return null.
          return null;
        }
        if (node.left === null) {
          // If the node has no left child, return the right child.
          return node.right;
        }
        if (node.right === null) {
          // If the node has no right child, return the left child.
          return node.left;
        }
        // If the node has two children, find the smallest value in the right subtree
        // (i.e., the leftmost node in the right subtree), replace the current node's
        // data with that value, and recursively delete the smallest node.
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = this._removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        // If the data is less than the current node's data, recursively search the left subtree.
        node.left = this._removeNode(node.left, data);
        return node;
      } else {
        // If the data is greater than the current node's data, recursively search the right subtree.
        node.right = this._removeNode(node.right, data);
        return node;
      }
    }

    min() {
      // Return the minimum value in the tree.
      if (this._root === null) {
        // If the tree is empty, return null.
        return null;
      }
      let current = this._root;
      while (current.left !== null) {
        // Traverse the left subtree until reaching the node with the smallest value.
        current = current.left;
      }
      return current.data;
    }

    max() {
      // Return the maximum value in the tree.
      if (this._root === null) {
        // If the tree is empty, return null.
        return null;
      }
      let current = this._root;
      while (current.right !== null) {
        // Traverse the right subtree until reaching the node with the largest value.
        current = current.right;
      }
      return current.data;
    }
  }



const bst = new BinarySearchTree();


bst.add(8);


console.log(bst.find(8)); // true




console.log(bst.has(5));
module.exports = {
  BinarySearchTree
};