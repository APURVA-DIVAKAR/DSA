/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left =0,max=0;
    for(let right =0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        max=Math.max(max,right-left+1);
    }
    return max
    // let max=0;
    // for(let i = 0;i<s.length;i++){
    //     let obj = {};
    //     for(let j = i;j<s.length;j++){
    //         let x = s[j];
    //         if(Object.keys(obj).includes(x)){
               
               
    //             break;
    //         }
    //         obj[x] = 1;
    //          let len = Object.keys(obj).length;
    //          max = Math.max(max,len);
    //     }
    // }
    // return max;
};