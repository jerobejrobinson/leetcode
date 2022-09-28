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

function slidingWindow(arr) {
    if(arr.length == 1) {
        return 0
    }
    for(let end = 1; end < arr.length + 1; end++) {
        
    }
    if(profit < 0) {
        return 0
    }
    return profit
}
// console.log(bestTimeToBuy([2,1,2,1,0,1,2]))
console.log(slidingWindow([2,4,1]))