// sliding window
function substringSize(str) {
    let count = 0;
    let [left, right] = [0, 2];
    
    while(right < str.length) {
        if(str[left + 1] == str[left] || str[left + 1] == str[right] || str[left] == str[right]) {
            
        } else count++
        left++;
        right++;
    }
    return count
}

console.log(substringSize("asc"))