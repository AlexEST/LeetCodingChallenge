/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 *
 * Example 1:
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac".
 *
 * Example 2:
 * Input: S = "ab##", T = "c#d#"
 * Output: true
 * Explanation: Both S and T become "".
 *
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sarr = S.split("");
    let tarr = T.split("");
    for (let i = 0; i < sarr.length; i++) {
        if (sarr[i]==="#"){
            if (i>0){
                sarr.splice(i-1,2);
                i -= 2;
            } else {
                sarr.splice(i,1);
                i--;
            }
        }
    }
    let s = sarr.join("");
    for (let i = 0; i < tarr.length; i++) {
        if (tarr[i]==="#"){
            if (i>0){
                tarr.splice(i-1,2);
                i -= 2;
            } else {
                tarr.splice(i,1);
                i--;
            }
        }
    }
    let t = tarr.join("");
    return s===t;
};

console.log(backspaceCompare("y#fo##f","y#f#o##f"));
console.log(backspaceCompare("a##c","#a#c"));
console.log(backspaceCompare("a#c","b"));