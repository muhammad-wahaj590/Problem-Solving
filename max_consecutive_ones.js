// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2






function consecutive(arr){
    let maxCount = 0;
    let currCount = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            currCount++
            if(currCount > maxCount){
                maxCount = currCount
            }
        }else{
            currCount = 0
        }
    }
    return maxCount
}

const arr = [1, 1, 0, 1, 1, 1];
console.log(consecutive(arr));

// ********** natural number max consecutive ********** 

function consecutive(arr) {
    let maxCount = 0;
    let currCount = 1;  // Start with 1 because we count the first element

    for (let i = 1; i < arr.length; i++) {  // Start from the second element
        if (arr[i] === arr[i - 1]) {
            currCount++;
            if (currCount > maxCount) {
                maxCount = currCount;
            }
        } else {
            currCount = 1;  // Reset the count to 1 for the new number
        }
    }

    return maxCount;
}

const arr2 = [1, 2, 0, 3, 5, 2,6,6,];
console.log(consecutive(arr2));  // Output: 3
