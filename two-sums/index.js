/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let solution = false;
    let map = new Map();
    
    nums.every((num, index) => {
        let rn = target - num;
        if(map.get(rn) == undefined) {
            map.set(num, index)
            return true
        } else {
            solution = [map.get(rn), index]
            return false
        }
    })
    
    return solution
};