// sliding window
function substringSize(str) {
    let count = 0;
    let [left, middle, right] = [0, 1, 2];
    
    while(right < str.length) {
        console.log()
        if(str[middle] == str[left] || str[middle] == str[right] || str[left] == str[right]) {
            
        } else {
            count++
        }
        left++;
        middle++;
        right++;
    }
    return count
}