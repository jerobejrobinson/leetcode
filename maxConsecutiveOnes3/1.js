function findMaxOnes(nums) {
    let count = 0;
    let largest = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
            count++
        } else {
            count = 0;
        }
        if(count > largest) {
            largest = count
        }
    }
    return largest
}

console.log(findMaxOnes([1,1,0,0,0,1,1,0,1,1]))