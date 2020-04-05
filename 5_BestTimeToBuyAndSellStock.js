/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you
 * like (i.e., buy one and sell one share of the stock multiple times)
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell
 * the stock before you buy again).
 *
 * Example 1:
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 *
 */

/**
* @param number  цены
* @return number
*/

// slow brute-force version (first decision that came to my mind)
var maxProfit = function(prices) {
    let sum = 0;
    let tempSum = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[j]>prices[j-1]){
                tempSum += (prices[j]-prices[j-1]);
            }
        }
        if (tempSum>sum){
            sum = tempSum;
        }
        tempSum = 0;
    }
    return sum;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));