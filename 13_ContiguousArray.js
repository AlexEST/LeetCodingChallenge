/**
 * Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
 *
 * Example 1:
 * Input: [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 *
 * Example 2:
 * Input: [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 * Note: The length of the given binary array will not exceed 50,000.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// Not my solution. I did find it in network.
var findMaxLength = function(nums) {
    const map = new Map();
    map.set(0,-1);
    let zero=0;
    let one=0;
    let len=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            zero++;
        }else{
            one++;
        }
        if(map.has(zero-one)){
            len=Math.max(len,i-map.get(zero-one));
        }else{
            map.set(zero-one,i);
        }
    }
    return len;
};

console.log(findMaxLength([0,1,0]));