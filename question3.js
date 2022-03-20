/*
Question 3

Given a string s consisting of some words separated by some number of spaces,
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

*/
import chalk from 'chalk';

var input = "i am aniket Vishwakarma";

let newInput = input.split(" ");
let finalInput = newInput[newInput.length - 1].length;
console.log(chalk.yellow("output: ") + finalInput);