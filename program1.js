/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            const lastOpenBracket = stack.pop();
            if (bracketMap[lastOpenBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;

   
    
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));  
console.log(isValid("(]")); 

module.exports = { isValid };


