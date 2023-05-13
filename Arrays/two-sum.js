/**
 *  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
 */

const nums = [3,3]
const target = 6

const twoSum = (nums, target) => {
    let left = 0;

    while(left < nums.length) {
        let right = left + 1;
        while(right < nums.length) {
            const isEqual = ((nums[left] + nums[right]) === target)

            if(isEqual) return [left, right]
            right++
        }
        left++
    }
}

console.log(twoSum(nums, target))