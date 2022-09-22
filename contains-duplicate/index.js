/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let map = new Map()
    let val;
    nums.every((num) => {
        if(map.get(num) == undefined) {
            map.set(num, true);
            return true
        } else {
            val = map.get(num);
            return false
        }
    })
    
    if(val) {
        return val
    } else {
        return false
    }
};