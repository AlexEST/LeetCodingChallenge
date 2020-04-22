/**
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays
 * whose sum equals to k.
 *
 * Example 1:
 * Input:nums = [1,1,1], k = 2
 * Output: 2
 * Note:
 * The length of the array is in range [1, 20,000].
 * The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 *
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//brute-force version
var subarraySum = function(nums, k) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===k){
            counter++;
        }
        sum += nums[i];
        for (let j = i+1; j < nums.length; j++) {
            sum += nums[j];
            if (sum===k){
                counter++;
            }
        }
        sum = 0;
    }
    return counter;
};

console.log(subarraySum([1,1,1],2));
console.log(subarraySum([1,2,3],3));
console.log(subarraySum([28,54,7,-70,22,65,-6],100));
console.log(subarraySum([0,0,0,0,0,0,0,0,0,0], 0));