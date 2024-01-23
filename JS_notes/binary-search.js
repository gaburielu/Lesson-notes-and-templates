class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

////////////////////////////////Depth-first traversal////////////////////////////////

function depthFirstPreorderTraversal(root) {
  if (!root) return;
  console.log(root.value); // Process the current node
  depthFirstPreorderTraversal(root.left); // Traverse the left subtree
  depthFirstPreorderTraversal(root.right); // Traverse the right subtree
  //The order of the traversal (Preorder, Inorder, Postorder) depends on the arrangement of these three code
}

function preorderTraversal(root, result = []) {
  if (root) {
    // Visit the current node (root)
    result.push(root.value);
    // Traverse the left subtree
    preorderTraversal(root.left, result);
    // Traverse the right subtree
    preorderTraversal(root.right, result);
  }
  return result;
}

////////////////////////////////Depth-first traversal////////////////////////////////

const treeRoot = new TreeNode(1);
treeRoot.left = new TreeNode(2);
treeRoot.right = new TreeNode(3);
treeRoot.left.left = new TreeNode(4);
treeRoot.left.right = new TreeNode(5);

const traversalResult = preorderTraversal(treeRoot);
console.log(traversalResult); // Output: [1, 2, 4, 5, 3]
