/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let n = nums.length;
    let index = 1;

    for(let i = 1; i < n; i++){
        if(nums[i-1] !== nums[i]){
            // console.log("1",nums[i-1],"i",nums[i],index)
            nums[index] = nums[i];
            // console.log("1",nums[index],"i",nums[i])
            index++;
        }
    }

    

    return index;
    
};