// Given a binary array nums and an integer k
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
function max(nums, k) {
    let maxLength = 0;
    let start = 0;
    let count = 0;

    for(let end = 0; end < nums.length; end++) {
        if(nums[end] == 0) {
            count++
        }
        if(count > k) {
            if(nums[start] === 0) {
                count--
            }
            start++
        }
        if(count <= k) {
            maxLength = Math.max(maxLength, end - start+1)
        }
    }
    
    return maxLength
}

console.log(max([1,1,0,1,0,1,1,0,0,1,1,1,0], 2))
//[1,1,1,0,0,0,1,1,1,1,0]
//https://leetcode.com/problems/max-consecutive-ones-iii/
//https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/sliding-window
// let the window grow until the k target is reached
// move start to the next zero when max zero is reached