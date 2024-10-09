// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


function romanToInteger(symbols){
    const romanMap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    let total = 0;
    for(let i=0; i<symbols.length; i++){
        const currVal = romanMap[symbols[i]]
        const nextVal = romanMap[symbols[i+1]]

        if(nextVal && nextVal > currVal){
            total -= currVal
        }else{
            total += currVal
        }
    }
    return total
}

const symbols = "MDLVIII"
console.log(romanToInteger(symbols))