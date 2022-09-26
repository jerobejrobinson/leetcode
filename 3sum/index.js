function threeSum(nums) {
    let arr = []
    // two pointers really works in a sorted enviroment
    nums.sort((a, b) => a - b)

    let [index, leftPlus, right] = [0, 1, nums.length - 1];

    while(leftPlus < right) {
        if(nums[index] + nums[leftPlus] + nums[right] === 0) {
            arr.push([nums[index] + nums[leftPlus] + nums[right]])
            index++;
            leftPlus++;
            right--;
        } else if(nums[index] + nums[leftPlus] + nums[right] < 0) {
            leftPlus++;
        } else {
            right--;
        }
    }
    return arr
}

console.log(threeSum([-1,0,1,2,-1,-4]))