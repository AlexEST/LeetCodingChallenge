/**
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 * If there're duplicates in arr, count them seperately.
 *
 * Example 1:
 * Input: arr = [1,2,3]
 * Output: 2
 * Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
 *
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    arr.sort(function (a,b) {
        return a-b;
    })
    let allCount = 0;
    let count = 0;
    let rep = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]+1===arr[j] && arr[j] !== arr[j-1]){
                count++;
            }
            if (arr[i]===arr[j]){
                rep++;
                arr.splice(j,1);
                j--;
            }
        }
        allCount += (count*rep);
        rep = 1;
        count = 0;
    }
    return allCount;
};

console.log(countElements([1,2,3]));
console.log(countElements([1,3,2,3,5,0]));
console.log(countElements([1,1,2,2]));
