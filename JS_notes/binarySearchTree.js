const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function removeDuplicate(arr) {
  return [...new Set(arr)];
}

function createBST(arr, start, end) {
  if (arr.length === 0 || arr === null || start > end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const root = new Node(arr[mid]);
  root.left = createBST(arr, start, mid - 1);
  root.right = createBST(arr, mid + 1, end);
  return root;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstPreorderTraversal(node) {
  if (!node) return;
  console.log(node.value);
  depthFirstPreorderTraversal(node.left);
  depthFirstPreorderTraversal(node.right);
}

function treeDepth(root) {
  if (root == null) {
    return 0;
  } else {
    let heightLeft = treeDepth(root.left);
    let heightRight = treeDepth(root.right);
    return Math.max(heightLeft, heightRight) + 1;
  }
}

function nodeHeight(root, value) {
  let node = find(root, value);
  return treeDepth(node);
}

class BinarySearchTree {
  constructor(array) {
    this.root = this.createTree(array);
  }

  createTree(arr) {
    let sanitizedArray = mergeSort(removeDuplicate(arr));
    return createBST(sanitizedArray, 0, sanitizedArray.length - 1);
  }

  insert(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      const searchTree = function (node) {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
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

  delete(value) {
    const removeNode = function (node, value) {
      if (node === null) {
        return null;
      }
      if (value == node.value) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }

  sumOfNodes(node) {
    if (node === null) {
      return 0;
    }
    let sum = 0;
    const queue = [node];
    while (queue.length > 0) {
      const current = queue.shift();
      sum++;
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return sum;
  }

  _find(node, value) {
    if (!node) {
      return null;
    }
    if (node.value === value) {
      return node;
    } else if (node.value > value) {
      return this._find(node.left, value);
    } else if (node.value < value) {
      return this._find(node.right, value);
    } else {
      return null;
    }
  }

  find(value) {
    return this._find(this.root, value);
  }

  height(node) {
    return treeDepth(node);
  }

  depth(node) {
    if (this.root === null || !node) {
      return -1;
    }
    let current = this.root;
    let currentDepth = 0;
    while (current !== null) {
      if (current.value === node.value) {
        return currentDepth;
      } else if (current.value > node.value) {
        current = current.left;
      } else if (current.value < node.value) {
        current = current.right;
      } else {
        return -1;
      }
      currentDepth++;
    }
    return -1;
  }

  levelOrder(node, callback = null){
    if (node === null) {
      return 0;
    }
    const result = [];
    const queue = [node];
    while (queue.length > 0) {
      const current = queue.shift();
      if(callback){
        callback(current);
      } else {
        result.push(current.value);
      }
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return result;
  }

  postOrderTraversal(node, callback = null) {
    const result = [];
    function traverse(currentNode) {
      if (currentNode) {
        traverse(currentNode.left);
        traverse(currentNode.right);
        if (callback) {
          callback(currentNode);
        } else {
          result.push(currentNode.value);
        }
      }
    }
    traverse(node);
    return result;
  }

  isBalanced(){
    let sumLeft = this.sumOfNodes(this.root.left);
    let sumRight = this.sumOfNodes(this.root.right);
    if(sumLeft - sumRight > 1 || sumRight - sumLeft > 1){
      return false;
    } else {
      return true;
    }
  }

  rebalance(node){
    let newTreeArray = this.levelOrder(tree.root);
    this.root = this.createTree(newTreeArray);
  }

  log(node) {
    console.log(node.value);
  }
}

// let foo = [
//   21, 23, 71, 4, 23, 48, 89, 43, 43, 90, 30, 55, 7, 99, 19, 67, 23, 54,
// ];
// let tree = new BinarySearchTree(foo);
// tree.insert(20);
// tree.insert(10);
// console.log(prettyPrint(tree.root));
// console.log(tree.isBalanced());
// tree.rebalance();
// console.log(prettyPrint(tree.root));
// console.log(tree.isBalanced());
// // tree.levelOrder(tree.root, tree.log);

///TESTING///

function randomNumberArray(){
  let arr = [];
  for(let i = 0; i < 16; i++){
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

let tree = new BinarySearchTree(randomNumberArray());

console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());

let newArr = randomNumberArray();
for(let i = 0; i < newArr.length;i++){
  tree.insert(newArr[i]);
}

console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());

tree.rebalance();

console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());