/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the
 * relative order of the non-zero elements.
 *
 * Example:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 *
 */

/**
 * @param {number[]} nums
 * @return {void} 
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===0){
            zeroCount++;
        }
    }
    for (let i = 0; i < nums.length-zeroCount; i++) {
        if (nums[i] === 0){
            let temp = nums[i];
            for (let j = i; j < nums.length; j++) {
                if (j===nums.length-1){
                    nums[j]=temp;
                    break;
                }
                nums[j] = nums[j+1];
            }
            i--;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));