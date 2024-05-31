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
    buildTree(array){
        let sortedArray = Array.from(new Set(mergeSort(array)));
        this.root = this.buildTreeFromClean(sortedArray);
    }
    buildTreeFromClean(array) {
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

        node.left = this.buildTreeFromClean(leftArray);
        node.right = this.buildTreeFromClean(rightArray);
        return node;
    }
    insertNode(value, root = this.root) {
        if (this.root === null) {
            this.root = new Node(value);
            return root;
        }
        if (root === null) {
            return new Node(value);
        }
        if (value === root.data) {
            console.log("Duplicate node");
            return root;
        }
        if (value < root.data) {
            root.left = this.insertNode(value, root.left);
        }
        if (value > root.data) {
            root.right = this.insertNode(value, root.right);
        }
        return root;
        //while ((value < currentNode.data) && currentNode.left !== null) {
        //    currentNode = currentNode.left;
        //    if (value === currentNode.data) {
        //        console.log("Duplicate node");
        //        return false;
        //    }
        //    if (currentNode.left === null) {
        //        currentNode.left = new Node(value);
        //        return;
        //    }
        //}
        //while ((value > currentNode.data) && currentNode.right !== null) {
    }
}
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

let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const bst = new Tree();

bst.buildTree(testArray);
//console.log(bst.root);
bst.insertNode(66);
console.log(bst.root);

prettyPrint(bst.root);