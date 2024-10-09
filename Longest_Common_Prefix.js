// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function logestCommonPrefx(strs){
    if(strs.length === 0) return ""
    let prefix = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1)
        }
        if(prefix === "") return ""
    }
    return prefix
}

const strs = ["flower","flow","flight"]
console.log(logestCommonPrefx(strs))