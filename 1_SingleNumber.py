'''
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
'''
from typing import List


def singleNumber(nums: List[int]) -> int:
    for element in nums:
        if nums.count(element) < 2:
            return element

print(singleNumber([4,1,2,1,2]));
