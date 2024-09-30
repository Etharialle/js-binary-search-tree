import { mergeSort } from "./mergeSort.mjs";
import { Node, BST } from "./bst.mjs";

//========= Start prettyPrint ====================
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
//========= End prettyPrint ====================
function printData(node) {
  console.log(node.data)
}


let testArray = [8, 6, 2, 8, 4, 10, 6, 9, 3, 10, 2, 8, 10, 0, 1];
//let testArray = [1,2,3,4,5,6,7];
const testTree = new BST();
testTree.buildTree(testArray);

prettyPrint(testTree.root);

console.log(...testTree.levelOrder());
//const resultArray = [];
console.log(testTree.breadthFirst(node => console.log(node.data)));
//console.log(resultArray);

