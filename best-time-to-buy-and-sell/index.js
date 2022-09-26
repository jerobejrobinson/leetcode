function bestTimeToBuy(arr) {
    let [left, right] = [0, 1];
    let buy = arr[left];
    let sell = arr[right];

    while(right < arr.length) {
        console.log(left, right, "check")
        if(arr[left] > arr[right]) {
            left++;
            right++;
        }

        if(arr[left] < arr[right]) {
            if(arr[right] < buy) {
                buy = arr[right];
                left = right
            }
            
            if(sell < arr[right]) {
                sell = arr[right]
            }
            right++
        }

        if(arr[left] === arr[right]) {
            right++;
        }
    }

    return sell - buy <= 0 ? 0 : sell - buy;
    
}

console.log(bestTimeToBuy([2,1,2,1,0,1,2]))