const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
constructor(){
  this.root = null;
}

  root() {
   return this.root;
  }

  add(value) {
    this.root = addWithin(this.root, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value); // fix: pass node.left to addWithin instead of node
      } else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return searchWithin(this.root, value);

    function searchWithin(node, value){
      if(!node){
        return false;
      }

      if(node.value === value){
        return true;
      }

      return value < node.value ?
      searchWithin(node.left, value) :
      searchWithin(node.right, value);
    }
  }

  find(value) {
    return findNode(this.root, value);

    function findNode(node, value) {
      if (!node) {
        return null;
      }

      if (node.value === value) {
        return node;
      } else if (value < node.value) {
        return findNode(node.left, value);
      } else {
        return findNode(node.right, value);
      }
    }
  }


  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value === node.value) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;
        node.right = removeNode(node.right, minFromRight.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    }
  }

  min() {
   if(!this.root){
    return;
   }
   let node = this.root;
   while (node.left){
    node = node.left;
   }
   return node.value;
  }

  max() {
    if(!this.root){
      return;
    }

    let node = this.root;
   while (node.right){
    node = node.right;
   }
   return node.value;
  }
}

module.exports = {
  BinarySearchTree
};