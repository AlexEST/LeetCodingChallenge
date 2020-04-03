import java.util.*
import kotlin.math.absoluteValue

/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution using the divide and
 * conquer approach, which is more subtle.
 *
 *
 */

fun main() {
    val arr = intArrayOf(-2,1,-3,4,-1,2,1,-5,4);
    val arr2 = intArrayOf(-1,-2);
    println(maxSubArray(arr));
    println(maxSubArray(arr2));
}

// Реализация алгоритма Каданеса
fun maxSubArray(nums: IntArray): Int? {
    var maxSoFar = 0;
    var maxEndingHere = 0
    for (i in nums) {
        maxEndingHere += i
        if (maxEndingHere < 0) maxEndingHere = 0 else if (maxSoFar != null) {
            if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere
        }
    }
    if (maxSoFar==0){
        val max = nums.max();
        if (max != null) {
            maxSoFar = max
        };
    }
    return maxSoFar
}