/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        // if negative → swap roles
        if (curr < 0) {
            [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
        }

        maxSoFar = Math.max(curr, maxSoFar * curr);
        minSoFar = Math.min(curr, minSoFar * curr);

        result = Math.max(result, maxSoFar);
    }

    return result;
};