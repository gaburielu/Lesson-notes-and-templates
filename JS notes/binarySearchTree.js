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

function depthFirstPreorderTraversal(root) {
  if (!root) return;
  console.log(root.value);
  depthFirstPreorderTraversal(root.left);
  depthFirstPreorderTraversal(root.right);
}

function find(root, value) {
  if (!root) {
    return null;
  }
  if (root.value === value) {
    return root;
  } else if (root.value > value) {
    return find(root.left, value);
  } else if (root.value < value) {
    return find(root.right, value);
  } else {
    return null;
  }
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

function nodeDepth(root, value) {
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
}

let foo = [
  21, 23, 71, 4, 23, 48, 89, 43, 43, 90, 30, 55, 7, 99, 19, 67, 23, 54,
];
console.log(mergeSort(removeDuplicate(foo)));
let tree = new BinarySearchTree(foo);
console.log(prettyPrint(tree.root));
console.log(nodeDepth(tree.root, 21));