import { mergeSort } from "./mergeSort.mjs";

export class Node {
    constructor (data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BST {
    constructor () {
        this.root = null;
    }
    buildTree(array){
        if (array.length === 0) {
            return null;
        }
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
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
        
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = function (node, data) {
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                // no children
                if (node.left === null && node.right === null) {
                    return null;
                }
                // no left child
                if (node.left === null) {
                    return node.right;
                }
                // no right child
                if (node.right === null) {
                    return node.left;
                }
                // two children
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node; 
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
    *levelOrder() {
        if (this.root === null) {
            return;
        }
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            yield node.data;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    breadthFirst(callback) {

        if (!callback) {
            throw new Error("Callback required");
        }
        try {
            if (this.root === null) {
                return;
            }
            const queue = [this.root];
            while (queue.length > 0) {
                const node = queue.shift();
                callback(node);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        } catch (e) {
            console.error(e);
        }
    }
    height(node) {
        const getHeight = function(node) {
            if (node === null) {
                return 0;
            } else {
            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right)
            return Math.max(leftHeight, rightHeight) + 1;
            }
        }
        this.root = getHeight(node);
    }
}