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
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while(right < arr.length) {
        if(arr[left] < arr[right]) {
            let profit = arr[right] - arr[left];

            max_profit = Math.max(profit, max_profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
}
// console.log(bestTimeToBuy([2,1,2,1,0,1,2]))
console.log(slidingWindow([2,4,1]))
//test 3