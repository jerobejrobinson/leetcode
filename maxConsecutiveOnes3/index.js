// Given a binary array nums and an integer k
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
function max(nums, k) {
 
    for(let i = 0; i < nums.length; i++) {
        if(nums[start] = 0) {
            countZeros = 1
        }
        if(nums[start] == 1) {
            countOnes = 2
        }
        if(nums[i + 1] == 1) {
            countOnes++
        }
        if(nums[i + 1] == 0) {
            countZeros++
            if(countZeros > k) {
                // windows 
                console.log(`ones: ${countOnes}`,`zeros: ${countZeros - 1}`)
                console.log(`start: ${start}`,`end: ${i + 1}`, `window: ${window}`)
                if(window > largest) largest = window
                window = 0;
                start += 1
                i = start
                countOnes = 0
                countZeros = 0;
            }
        }
    }
    
    return largest
}

console.log(max([1,1,0,1,0,1,1,0,0,1,1,1,0], 2))
//[1,1,1,0,0,0,1,1,1,1,0]
//https://leetcode.com/problems/max-consecutive-ones-iii/
//https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/sliding-window
// let the window grow until the k target is reached
// move start to the next zero when max zero is reached