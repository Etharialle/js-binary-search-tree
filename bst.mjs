import { mergeSort } from "./mergeSort.mjs";

class Node {
    constructor (data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor (root = null) {
        this.root = root;
    }
    buildTree(array) {
        let start = 0;
        let end = array.length - 1;
        if (start > end)
        {
            return null;
        }
    
        let middle = parseInt((array.length) / 2);
        let node = new Node(array[middle]);
        let leftArray = array.slice(0,middle);
        let rightArray = array.slice(middle + 1);

        node.left = this.buildTree(leftArray);

        node.right = this.buildTree(rightArray);
        return node;
    }
}

let testArray = [1, 2, 3, 4];
let sortedArray = mergeSort(testArray);
console.log(sortedArray);
const bst = new Tree();
console.log(bst);
bst.root = bst.buildTree(sortedArray);
console.log(bst);
//bst.root = bst.sortedArrayToBST(sortedArray, 0, 7);
// set root to middle
// split array to left and right
// left = array.slice(0, middle)
// right = array.slice(middle + 1)
// if left.length > 0 then buildTree(left)
// if right.length > 0 then buildTree(right)

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  prettyPrint(bst.root);