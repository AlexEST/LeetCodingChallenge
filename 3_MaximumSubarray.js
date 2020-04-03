/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the
 * largest sum and return its sum.
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 */

/**
 * Метод на основе простого перебора (brute-force)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let maxSub = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i];
        if (sum > maxSub){
            maxSub = sum;
        }
        for (let j = i+1; j < nums.length; j++) {
            sum += nums[j];
            if (sum > maxSub){
                maxSub = sum;
            }
        }
    }
    return maxSub;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1,2]));
console.log(maxSubArray([-2,1]));