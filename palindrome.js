// making sure string is valid
function isStr(str) {
    if(str && str.length != 0) {
        return str.toLowerCase()
    } 
    return false
}
// making sure char is alphanumeric 
function checkChar(char) {
    let alpha = char < 'a' || 'z' < char;
    let num = char < '0' || '9' < char;
    return alpha && num
}

function isPalindrome(str) {
    if(!isStr(str)) {
        return false;
    };

    str = isStr(str);
    let [left, right] = [0, str.length - 1];
    while(left < right) {
        while(left < right && checkChar(str[left])) {
            left++;
        };
        while(left < right && checkChar(str[right])) {
            right--;
        }
    
        const check = str[left] === str[right];

        if(!check) return false

        left++;
        right--;
    }

    return true
}

console.log(isPalindrome("racecar"))