/*
Question 2

Given an integer array nums sorted in non-decreasing order,
remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same.
*/

import chalk from 'chalk';

let nums = [0,0,1,1,1,2,2,3,3,4]
let newNums = [...new Set(nums)];
console.log(chalk.green("Output:") + newNums.length);
console.log(chalk.yellow("nums: " )+ newNums);