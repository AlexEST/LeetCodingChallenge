/**
 * You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
 *
 * direction can be 0 (for left shift) or 1 (for right shift).
 * amount is the amount by which string s is to be shifted.
 * A left shift by 1 means remove the first character of s and append it to the end.
 * Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
 * Return the final string after all operations.
 *
 * Example 1:
 *
 * Input: s = "abc", shift = [[0,1],[1,2]]
 * Output: "cab"
 * Explanation:
 * [0,1] means shift to left by 1. "abc" -> "bca"
 * [1,2] means shift to right by 2. "bca" -> "cab"
 *
 * Example 2:
 * Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
 * Output: "efgabcd"
 * Explanation:
 * [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
 * [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
 * [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
 * [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 *
 */


/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let map = new Map();
    map.set(0,0);
    map.set(1,0);
    for (let i = 0; i < shift.length; i++) {
        for (let j = 0; j < shift[i].length-1; j++) {
            if (shift[i][j]===0){
                map.set(0,map.get(0)+shift[i][j+1]);
            } else {
                map.set(1,map.get(1)+shift[i][j+1]);
            }
        }
    }
    if (map.get(0)>map.get(1)){
        let countShifts = map.get(0)-map.get(1);
        for (let i = 0; i < countShifts; i++) {
            s = s.slice(1,s.length) + s.charAt(0);
        }
    } else {
        let countShifts = map.get(1)-map.get(0);
        for (let i = 0; i < countShifts; i++) {
            s = s.charAt(s.length-1)+s.slice(0,s.length-1);
        }
    }
    return s;
};

console.log(stringShift("abcdefg",[[1,1],[1,1],[0,2],[1,3]]));
console.log(stringShift("abc",[[0,1],[1,2]]));