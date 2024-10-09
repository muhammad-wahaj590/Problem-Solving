// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).



function removeDuplicates(arr){
    if(arr.length === 0) return arr
    let uniqueIndex = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            arr[uniqueIndex] = arr[i];
            uniqueIndex++;
        }
    }

    // for(let j=uniqueIndex; j<arr.length; j++){
    //         arr[j] = "_"
    // }
    arr.fill("_", uniqueIndex)
    return arr
}

const arr = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(arr))