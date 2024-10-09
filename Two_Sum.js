// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(arr, tar){
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<=arr.length; j++){
            if(arr[i] + arr[j] === tar){
                return [i, j]
            }
        }
    }
    return []
}

const arr = [2,7,11,15];
const tar = 18;
console.log(twoSum(arr, tar))