/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let indx = 0;
    let max = 0;
    for(let i =1;i<prices.length;i++){
        if(prices[indx]>prices[i]){
            indx = i;
        }
        if(prices[i]-prices[indx]>max){
            max = prices[i]-prices[indx];
        }
    }
    
    return max;
};