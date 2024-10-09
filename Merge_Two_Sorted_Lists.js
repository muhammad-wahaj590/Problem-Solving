// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


const a1 = [1, 2, 4]
const a2 = [1, 3, 4]
const a3 = [...a1, ...a2]

a3.sort((a,b) => a - b)

console.log(a3)