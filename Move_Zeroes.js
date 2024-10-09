function moveZeroes(arr){
    if(arr.length === 0) return arr
    let zeroIndexValue = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            // using temp variable to swap
            let temp = arr[zeroIndexValue]
            arr[zeroIndexValue] = arr[i];
            arr[i] = temp

            zeroIndexValue++
        }
}
return arr
}

const arr = [0,1,0,3,12]
console.log(moveZeroes(arr))

// without using temp variable using swap 
function moveZeroes2(nums){
    if(nums.length === 0) return nums
    let zeroIndexValue = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            // without using temp variable to swap
            nums[zeroIndexValue] = nums[zeroIndexValue] + nums[i] 
            nums[i] = nums[zeroIndexValue] - nums[i]
            nums[zeroIndexValue] = nums[zeroIndexValue] - nums[i]

            zeroIndexValue++;
        }
}
return nums
}

const nums = [0,1,0,3,12]
console.log(moveZeroes2(nums))