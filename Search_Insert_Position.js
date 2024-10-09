// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4



function searchInsertPosition(arr, tar) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const midValue = Math.floor((left + right) / 2);
    if (arr[midValue] === tar) {
      return midValue;
    } else if (arr[midValue] < tar) {
      left = midValue + 1;
    } else {
      right = midValue - 1;
    }
  }

  return left;
}

const arr = [1, 3, 5, 6];
const tar = 5;
console.log(searchInsertPosition(arr, tar));
