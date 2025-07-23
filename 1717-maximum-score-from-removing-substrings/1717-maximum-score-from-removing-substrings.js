/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let first = x > y ? 'ab' : 'ba';
    let second = x > y ? 'ba' : 'ab';
    let firstVal = Math.max(x, y);
    let secondVal = Math.min(x, y);
    let total = 0;
    
    let stack = [];
    for (let c of s) {
        if (stack.length && stack[stack.length-1] + c === first) {
            stack.pop();
            total += firstVal;
        } else {
            stack.push(c);
        }
    }
    
    let newStack = [];
    for (let c of stack) {
        if (newStack.length && newStack[newStack.length-1] + c === second) {
            newStack.pop();
            total += secondVal;
        } else {
            newStack.push(c);
        }
    }
    
    return total;
};