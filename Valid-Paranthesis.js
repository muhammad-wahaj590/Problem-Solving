// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true

function validParanthesis(s){
    let stack = []
    const paranMap ={
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }

    for(let i=0; i<s.length; i++){
        const curr = s[i]
        if(paranMap[curr]){
            stack.push(curr)
        }else{
            const top = stack.pop()
            if(paranMap[top] !== curr){
                return false
            }
        }
    }
    return stack.length === 0
}

const s = "()";
console.log(validParanthesis(s))


