function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const jerobe = new TreeNode("Jerobe")

// jerobe.left = new TreeNode("Tansy", new TreeNode("Claudia"), new TreeNode("Calvin"))
// jerobe.right = new TreeNode("Derrick", new TreeNode("Phyllis"), new TreeNode("Levi"))

const root1 = new TreeNode(10, new TreeNode(7, new TreeNode(3), new TreeNode(8)), new TreeNode(17, new TreeNode(11), new TreeNode(18)))
const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

function searchTree(tree) {
    
    tree.left && searchTree(tree.left)
    console.log(tree.val)
    tree.right && searchTree(tree.right)
    
    return tree
}
// function isSameBT(r1, r2) {

// }
// console.log(root.left.val)

console.log(searchTree(root1))