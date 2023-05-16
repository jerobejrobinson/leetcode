/**
 * Given the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
    URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

const root1 = new TreeNode(3, new TreeNode(9, null, new TreeNode(10, new TreeNode(11), null)), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
const root2 = new TreeNode(3, new TreeNode(1, new TreeNode(8)), new TreeNode(4, new TreeNode(4, new TreeNode(89), new TreeNode(5)), new TreeNode(5)))
/**
 * @param {TreeNode} root
 * @return {number}
 */
function treeTraveral(root) {
    
}
var maxDepth = function(root) {
    let [left, right] = [1,1]
    if(!root) return 0
    if(root.left) {
        left += maxDepth(root.left)
    }
    if(root.right) {
        right += maxDepth(root.right)
    }
    return left > right ? left : right
};

console.log(maxDepth(root1))