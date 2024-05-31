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
        for (const element of array) {
            newNode = new Node(element);
        }
    }
}

let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let sortedArray = mergeSort(testArray);
console.log(sortedArray);
const bst = new Tree();
console.log(bst);