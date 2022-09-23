function countInward(str) {
    let [left, right ] = [0, str.length - 1]

    while ( left < right) {
        while(left < right && isNonAlphaNumeric(str[left])) left++;
        while(left < right && isNonAlphaNumeric(str[right])) right--;

        const isSame = str[left] === str[right]
        if(!isSame) return false;

        left++
        right--
    }

    return true
}
const isNonAlphaNumeric = (char) => {
    const isNonAlpha = char < 'a' || 'z' < char; // a(97) - z(122)
    const isNonNumeric = char < '0' || '9' < char; // 0(48) - 9(57)

    return isNonAlpha && isNonNumeric;
};
console.log(countInward("rac e c  ()  ar"))