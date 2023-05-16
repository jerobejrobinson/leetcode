/**
 *  Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

    URL: https://leetcode.com/problems/same-tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(tree1, tree2) {

    if(tree1 == null && tree2 !== null) return false
    if(tree1 !== null && tree2 == null) return false
    if (tree1 == null && tree2 == null) return true
    
    if(tree1.val !== tree2.val) return false

    if(!isSameTree(tree1.left, tree2.left)) return false
    if(!isSameTree(tree1.right, tree2.right)) return false
    
    return true
};