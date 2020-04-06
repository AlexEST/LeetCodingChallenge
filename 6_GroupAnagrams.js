/**
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [["ate","eat","tea"],
 *  ["nat","tan"],
 *  ["bat"]]
 *
 *  Note:
 *  All inputs will be in lowercase.
 *  The order of your output does not matter.
 *
 *
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//slow version without hashMap
var groupAnagrams = function(strs) {
    let arr = [];
    for (let i = 0; i < strs.length; i++) {
        let subArr = [];
        subArr.push(strs[i]);
        let s = strs[i].split("").sort().join("");
        for (let j = i+1; j < strs.length; j++) {
            if (strs[i].length===strs[j].length){
                if (s === strs[j].split("").sort().join("")){
                    subArr.push(strs[j]);
                    strs.splice(j,1);
                    j--;
                }
            }
        }
        arr.push(subArr);
    }
    return arr;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));