/**
 *  Given the root of a binary tree, invert the tree, and return its root.

    URL: https://leetcode.com/problems/invert-binary-tree/
 */


/**
 * Definition for a binary tree node.
 *  function TreeNode(val, left, right) {
 *      this.val = (val===undefined ? 0 : val)
 *      this.left = (left===undefined ? null : left)
 *      this.right = (right===undefined ? null : right)
 *  }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(2, new TreeNode(3, new TreeNode(1)))

var invertTree = function(root) {
    if(root === null) return null

    if(root.left || root.right) {
        const left = root.left
        const right = root.right
        root.left = right
        root.right = left
        invertTree(root.left)
        invertTree(root.right)
    }

    return root
};

console.log(invertTree(root))