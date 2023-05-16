function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const jerobe = new TreeNode("Jerobe")

// jerobe.left = new TreeNode("Tansy", new TreeNode("Claudia"), new TreeNode("Calvin"))
// jerobe.right = new TreeNode("Derrick", new TreeNode("Phyllis"), new TreeNode("Levi"))

const root1 = new TreeNode(10, new TreeNode(7, new TreeNode(3), new TreeNode(8)), new TreeNode(17, new TreeNode(11), new TreeNode(18)))
const root2 = new TreeNode(1, null, new TreeNode(3))
const root3 = new TreeNode(1, new TreeNode(4), new TreeNode(3))

function searchTree(tree1, tree2) {
   
    if(tree1 == null && tree2 !== null) return false
    if(tree1 !== null && tree2 == null) return false
    if (tree1 == null && tree2 == null) return true
    
    if(tree1.val !== tree2.val) return false

    if(!searchTree(tree1.left, tree2.left)) return false
    if(!searchTree(tree1.right, tree2.right)) return false
    
    return true
}

console.log(searchTree(root2, root3))