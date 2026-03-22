/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = Number.NEGATIVE_INFINITY;
    let currentSum = 0;
    let n = nums.length;

    for(let i =0;i<n;i++){
      currentSum += nums[i]
      max = Math.max(currentSum,max);
      if(currentSum<0){
        currentSum = 0;
      }
        
    }
    return max;

    
};