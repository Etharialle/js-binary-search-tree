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

    }
    sortedArrayToBST(array, start, end) {
    if (start > end)
    {
        return null;
    }

    let middle = parseInt((start + end) / 2);
    let node = new Node(array[middle]);

    node.left = this.sortedArrayToBST(array, start, middle - 1);

    node.right = this.sortedArrayToBST(array, middle + 1, end);
    return node;
    }
}

let testArray = [1, 2, 3, 4, 92, 15, 13, 27];
let sortedArray = mergeSort(testArray);
console.log(sortedArray);
const bst = new Tree();
console.log(bst);
//bst.buildTree(sortedArray);
console.log(bst);
bst.root = bst.sortedArrayToBST(sortedArray, 0, 7);
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