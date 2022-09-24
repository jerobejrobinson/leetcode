function isPalindrome(s) {
    // convert string to lowercase
    s = s.toLowerCase()
    // setup left and right pointers
    let [left, right] = [0, s.length - 1]
    // compare left and right values
    while(left < right) {
        // we are goiing to ignore any non alphanumeric characters in the string
        while(left < right && isNonAlphaNumeric(s[left])) left++;
        while(left < right && isNonAlphaNumeric(s[right])) right--;

        // compare the valid characters to each other
        let isSame = s[left] === s[right];

        // is they are not the same return false
        if(!isSame) {
            return false
        }

        // increment left and decrement right
        left++;
        right--;
    }
    return true
}

// check is character is not a alphanumeric character
function isNonAlphaNumeric(char) {
    const isNotAlpha = char < 'a' || 'z' < char;
    const isNotNumeric = char < '0' || '9' < char;
    return isNotAlpha && isNotNumeric
}

console.log(isPalindrome("racEcar"))