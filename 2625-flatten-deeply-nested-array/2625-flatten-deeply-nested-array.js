/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];
    function deepFlatten(arr,depth){
        
        for(const element of arr){
            if(Array.isArray(element) && depth <n){
                deepFlatten(element , depth+1);
            } else {
                result.push(element);
            }
        }
    }
  
  deepFlatten(arr, 0);
  return result;
}

// const flatten = (arr) => {
//       let ret = [];
//       for(let i =0;i<arr.length;i++){
//         if(Array.isArray(arr[i])) {
//             ret = ret.concat(flatten(arr[i]));
//         } else {
//             ret.push(arr[i])
//         }
//       }
//     return ret;
// }