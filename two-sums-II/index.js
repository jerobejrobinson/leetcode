function twoSumHashmap(nums, target) {
    const map = new Map();
    
    let left = 0;
    while(left < nums.length) {
        let temp = left + 1
        let rn = target - nums[left]
        if(map.get(rn) == undefined) {
            map.set(nums[left], temp)
        } else {

            return [map.get(rn), temp]
        }
        left++;
    }
}

// two pointers works like this because the array is sorted.
function twoSumTwoPointers(numbers, target) {
    let [left, right] = [0, numbers.length - 1];

    while(left < right) {
        let sum =  numbers[left] + numbers[right]
        if(sum < target) {
            left++;
        } else if(sum > target) {
            right--;
        } else {
            return [left + 1, right + 1] 
        }
    }
}
console.log(twoSumTwoPointers([2,7,11,15], 26))