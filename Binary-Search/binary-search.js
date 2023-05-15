/**
 *  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
 *  If target exists, then return its index. Otherwise, return -1.

    You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const numsLength = nums.length
    let targetIndex = null

    if(nums[Math.floor(numsLength/2)] === target) {
        return Math.floor(numsLength/2)
    }

    if(nums[Math.floor(numsLength/2)] > target) {
        let index = 0;
        while(index < Math.floor(numsLength/2)) {

            if(nums[index] === target) {
                return targetIndex = index
            }
            index++
        }
    }

    if(nums[Math.floor(numsLength/2)] < target) {
        let index = numsLength - 1
        while(index > Math.floor(numsLength/2)) {
            if(nums[index] === target) {
                return targetIndex = index
            }
            index--
        }
    }

    return  -1
};

console.log(search([2,5], 2))

const arr = [-1,0,3,5,9,12,16,21,23,76]