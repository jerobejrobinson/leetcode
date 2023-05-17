/**
 *  Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

    A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

    URL: https://leetcode.com/problems/subtree-of-another-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const r = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5))
const sR = new TreeNode(4, new TreeNode(1), new TreeNode(2))

var isSameTree = function(tree1, tree2) {

    if(tree1 == null && tree2 !== null) return false
    if(tree1 !== null && tree2 == null) return false
    if (tree1 == null && tree2 == null) return true
    
    if(tree1.val !== tree2.val) return false

    if(!isSameTree(tree1.left, tree2.left)) return false
    if(!isSameTree(tree1.right, tree2.right)) return false
    
    return true
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let res = false
    if(root == null) return false
    if(root.left == null) return false
    if(root.right == null) return false
    let match = (root.val === subRoot.val)

    if(!match ) {
        
    }
    if(root.left.val !== subRoot.val) {
        isSubtree(root.left)
    }
    if(root.right.val !== subRoot.val) {
        isSubtree(root.right)
    }
    if(root.left.val == subRoot.val) {
        res = isSameTree(root.left, subRoot)
    }
    if(root.right.val == subRoot.val) {
        res = isSameTree(root.root, subRoot)
    }

    return res
};

console.log(isSubtree(r, sR))