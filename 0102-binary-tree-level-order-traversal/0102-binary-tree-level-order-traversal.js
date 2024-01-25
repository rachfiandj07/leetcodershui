/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var traverse = function(root, level = 0, result = []) {
        if ( root == null) {
            return
        }

        if (!result[level]) {
            result[level] = []
        }

        result[level].push(root.val)
        traverse(root.left, level + 1, result)
        traverse(root.right, level + 1, result)

        return result
    }
    return !traverse(root) ? [] : traverse(root)
}