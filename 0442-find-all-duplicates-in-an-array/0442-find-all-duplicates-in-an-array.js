/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    nums.sort((a,b)=> a-b);
    let i = 0;
    let res = [];
    
    while(i < nums.length-1){
        if(nums[i] === nums[i+1]) {
            res.push(nums[i]);
            i += 2;
        } else {
            i++;
        }
    }

    return res;
    
};