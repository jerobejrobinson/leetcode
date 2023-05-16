/**
 *  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
 */

const nums = [3,3]
const target = 6

const twoSum = (nums, target) => {
    let solution = []
    const map = new Map()

    nums.every((num, index) => {
        const req = target - num

        if(map.get(req) == undefined) {
            map.set(num, index)
            return true
        } else {
            solution = [map.get(req), index]
            return false
        }
    })

    return solution
}

console.log(twoSum(nums, target))