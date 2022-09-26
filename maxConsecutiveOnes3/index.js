function max(arr) {
    let [left, right] = [0, 1];
    let count = 0;
    while(right < arr.length) {
        // console.log(arr[left], arr[right])
        if(arr[left] == 1) {
            if(arr[right] == 1) {
                
            }
            if(arr[right] == 0) {

            }
        }
        if(arr[left] == 0) {
            if(arr[right] == 1) {
                
            }
            if(arr[right] == 0) {

            }
        }
    }
    return count
}

console.log(max([1,1,1,0,0,0,1,1,1,1,0]))
//https://leetcode.com/problems/max-consecutive-ones-iii/
//https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/sliding-window