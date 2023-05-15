/**
 *  You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

const prices = [3,2,6,5,0,3];

const maxProfit = (prices) => {
    let [left, right, lowestIndex, highestIndex] = [ 0, 1, 0, 1]

    let maxProfit = 0;
    
    if(prices.length <= 1) return 0

    while(right < prices.length) {
        lowestIndex = (prices[left] <= prices[lowestIndex] ? left : lowestIndex)
        highestIndex = ((prices[right] > prices[highestIndex]) ? right : (highestIndex < left) ? right : highestIndex)

        let profit = (prices[highestIndex] - prices[lowestIndex])

        maxProfit = Math.max(profit, maxProfit)

        left = right
        right++
    }

    return maxProfit
}

console.log(maxProfit(prices))