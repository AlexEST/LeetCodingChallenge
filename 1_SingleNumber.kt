/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * Example 1:
 *
 * Input: [2,2,1]
 * Output: 1
 * Example 2:
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 */
fun main() {
    val arr = intArrayOf(1, 0, 1, 2, 2, 3, 3);
    println(singleNumber(arr));
}

fun singleNumber(nums: IntArray): Int {
    var list: ArrayList<Int> = arrayListOf();
    nums.sort();
    for ((index, num) in nums.withIndex()){
        if (!list.contains(num)){
            if (index < nums.size-1 && num != nums[index+1]){
                return num;
            } else if (index == nums.size-1) {
                return num;
            } else {
                list.add(num);
            }
        }
    }
    return -1;
}

