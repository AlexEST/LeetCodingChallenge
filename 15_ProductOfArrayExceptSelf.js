/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * Example:
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array
 * (including the whole array) fits in a 32 bit integer.
 *
 * Note: Please solve it without division and in O(n).
 *
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does not count as extra space for the
 * purpose of space complexity analysis.)
 *
 *
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = nums.reduce(function (a,b) {
        return a * b;
    });
    let zeroCount = 0;
    if (product===0){
        let index;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i]===0){
                zeroCount++;
                index = i;
            }
            if (zeroCount>1){
                break;
            }
        }
        if (zeroCount>1){
            nums.fill(0);
            return nums;
        } else {
            product = [...nums.slice(0,index),...nums.slice(index+1,nums.length)].reduce(function (a,b) {
                return a * b;
            });
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===0){
            nums[i] = product;
        } else {
            if (zeroCount>0){
                nums[i] = 0;
            } else {
                nums[i] = product / nums[i];
            }
        }
    };
    return nums;
}


console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([0,0]));
console.log(productExceptSelf([1,0]));