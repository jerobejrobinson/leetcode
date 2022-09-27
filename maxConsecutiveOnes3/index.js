// Given a binary array nums and an integer k
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
function max(nums, k) {
    let zeroIndexes = [];
    let oneIndexes = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            zeroIndexes.push(i)
        }
        if(nums[i] == 1) {
            oneIndexes.push(i)
        }
    }
    console.log(oneIndexes)
    return zeroIndexes
}

console.log(max([1,1,1,0,0,0,1,1,0,1,1], 3))
//[1,1,1,0,0,0,1,1,1,1,0]
//https://leetcode.com/problems/max-consecutive-ones-iii/
//https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/sliding-window