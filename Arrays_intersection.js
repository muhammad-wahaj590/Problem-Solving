// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.




function intersection(arr1, arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = []
    
    for(let value of set2){
        if(set1.has(value)){
            result.push(value)
        }
    }
    return result
}

const arr1 = [9, 4, 9, 8, 4];
const arr2 = [4, 9, 5];
// const arr1 = [1,2,2,1];
// const arr2 = [2,2];

console.log(intersection(arr1, arr2));