function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const jerobe = new TreeNode("Jerobe")

// jerobe.left = new TreeNode("Tansy", new TreeNode("Claudia"), new TreeNode("Calvin"))
// jerobe.right = new TreeNode("Derrick", new TreeNode("Phyllis"), new TreeNode("Levi"))

const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))
const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

function searchTree(tree) {
    console.log(tree.val)
    if(tree.right) {
        return searchTree(tree.right)
    }

    // return tree.val
}
function isSameBT(r1, r2) {

}
// console.log(root.left.val)

console.log(searchTree(root1))