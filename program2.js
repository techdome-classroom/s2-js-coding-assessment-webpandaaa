/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const currentValue = romanMap[s[i]];
        const nextValue = romanMap[s[i + 1]];

        // If the current value is less than the next value, subtract it
        if (nextValue > currentValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }

    return total;
};


module.exports={romanToInt}