const swap = (str, left, right) => {
    // store the character in a new variable
    let temp = str[left];
    // replace the character in the left positon with the character in the right position
    str[left] = str[right];
    // take the new variable and use it to replace the character in the right position
    str[right] = temp;
}

const reverse = (str) => {
    str = str.split('');
    
    let [left, right] = [0, str.length - 1];

    while(left < right) {
        swap(str, left, right);

        left++;
        right--;
    }
    
    return str.join('')
}

console.log(reverse("jerobe"))