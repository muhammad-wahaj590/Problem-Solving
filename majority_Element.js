// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2





function majorityElement(arr){
    let majorityElement = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i]){
            majorityElement = arr[i]
        }
    }
    return majorityElement;
}

const  arr = [2,2,1,1,1,2,2,1,2,2]
console.log(majorityElement(arr))