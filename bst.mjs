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
    }
    removeNode(value, root = this.root) {
        if (this.root === null) {
            console.log("Nothing to delete");
            return root;
        }
        if (value === this.root.data && this.root.left === null && this.root.right === null) {
            this.root = null;
            return root;
        }
        //if (value === this.root.data && this.root.right === null) {
        //
        //}
        if (value === root.left.data) {
            let removeNode = root.left;
            if (removeNode.left === null && removeNode.right === null) {
                root.left = null;
                return root;
            } else if (removeNode.right === null) {
                root.left = removeNode.left;
                return root;
            } else {
                let rightNode = removeNode.right;
                
                rightNode.left = removeNode.left;
                root.left = rightNode;
                return root;
            }
        }
        if (value === root.right.data) {
            let removeNode = root.right;
            if (removeNode.left === null && removeNode.right === null) {
                root.right = null;
                return root;
            }
            if (removeNode.right === null) {
                root.right = removeNode.left;
                return root;
            }
        }

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

let testArray = [1,2,3,4,5,6,7];
const bst = new Tree();

bst.buildTree(testArray);
//console.log(bst.root);
//bst.insertNode(66);
console.log(bst.root);
bst.removeNode(5);
//bst.removeNode(4);
//bst.removeNode(2);
bst.removeNode(3);
bst.removeNode(2);
prettyPrint(bst.root);