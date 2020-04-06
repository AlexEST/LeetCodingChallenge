/**
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [["ate","eat","tea"],
 * ["nat","tan"],
 * ["bat"]]
 *
 * Note:
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 *
 */

fun main() {
    println(groupAnagrams(arrayOf("eat", "tea", "tan", "ate", "nat", "bat")));
}

fun groupAnagrams(strs: Array<String>): List<List<String>> {
    var map:HashMap<String,List<String>> = HashMap<String,List<String>>();
    var retList = ArrayList<List<String>>();
    for (i in strs.indices){
        var word = strs[i].toCharArray().sorted().joinToString("");
        if (map.containsKey(word)){
            var list = map[word] as ArrayList<String>;
            list.add(strs[i]);
            map[word] = list;
        } else {
            map[word] = arrayListOf(strs[i]);
        }
    }
    for ((key,value) in map){
        retList.add(value);
    }
    return retList;
}