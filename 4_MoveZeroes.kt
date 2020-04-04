/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative
 * order of the non-zero elements.
 *
 * Example:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 *
 *
 */

fun main() {
    val arr = intArrayOf(0,1,0,3,12);
    println(moveZeroes(arr).contentToString());
}

fun moveZeroes(nums: IntArray): IntArray {
    for (i in nums.indices){
        if (nums[i]==0){
            for (j in i+1 until  nums.size){
                if (nums[j]!=0){
                    nums[i] = nums[j].also { nums[j]=nums[i] }
                    break;
                }
            }
        }
    }
    return nums;
}