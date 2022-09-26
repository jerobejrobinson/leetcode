function max(arr) {
    let [left, right] = [0, 1];
    let count = 0;
    while(right < arr.length) {
        if(arr[left] == arr[right]) {
            count++
        }
        left++
        right++
    }
    return count
}

console.log(max([1,1,1,0,0,0,1,1,1,1,0]))
//https://leetcode.com/problems/max-consecutive-ones-iii/
//https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/sliding-window