// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false









function majorityElement(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i]){ 
            return true
        }else{
            return false
        }
    }
}


const  arr = [2,2,1,1,1,2,2,1,2,2]
console.log(majorityElement(arr))