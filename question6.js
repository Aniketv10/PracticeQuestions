/*

Given an integer array nums, find the contiguous subarray
(containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

*/


import chalk from 'chalk';


let arr = [-2,1,-3,4,-1,2,1,-5,4];
const App = function(arr){
    let maximumSum = 0;
   let currentSum = 0;
    for(let i=0; i<arr.length; i++){
        currentSum = currentSum + arr[i];
        if(currentSum > maximumSum){
            maximumSum = currentSum;
            // console.log(maximumSum);
        }
        if(currentSum < 0 ){
            currentSum = 0;
        }
    }
    return maximumSum;
}
function maxSum () {
    var NewData = App(arr);
    console.log(chalk.yellow("OutPut: ") +chalk.green(NewData));
}
maxSum();