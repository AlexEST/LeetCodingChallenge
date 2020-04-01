/**
 *
 *
 *
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])){
            let count = 0;
            for (let j = i+1; j < nums.length; j++) {
                if (nums[i]===nums[j]){
                    count++;
                    break;
                }
            }
            if (count===0){
                return nums[i];
            } else {
                arr.push(nums[i]);
            }
        }
    }
};

let num = singleNumber([4,1,2,1,2]);
console.log(num);