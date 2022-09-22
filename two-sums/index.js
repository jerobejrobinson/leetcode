/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    let solution = false;
    let hashmap = new Map();
    
    nums.every((num, index) => {
        let rn = target - num;
        if(hashmap.get(rn) == undefined) {
            hashmap.set(num, index)
            return true
        } else {
            solution = [hashmap.get(rn), index]
            return false
        }
    })
    
    return solution
};