/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */


let isPalindrome = function (num) {
    numReversed = parseInt(num.toString().split("").reverse().join(""));
    if (num === numReversed) return true
    else return false
}
isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);


