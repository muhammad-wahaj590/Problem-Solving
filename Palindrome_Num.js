// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.



function palindrome_num(num){
    let str = num.toString();
    let i = 0;
    let j = str.length - 1
    while(i < j){
        if(str[i] !== str[j]){
            return false
        }
        i++;
        j--;
    }
    return true
}

const num = 121;
console.log(palindrome_num(num))