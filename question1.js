/*

Question 1



Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/ 



import chalk from 'chalk';

let num = 123;
let newNum = num;
let reverseNum = 0;

while(num != 0){
    reverseNum = reverseNum*10 + num%10;
    num = parseInt(num/10);
}
if(newNum == reverseNum){
    console.log(chalk.green(newNum) + "  Is A Palindrome Number!!")
}else{
    console.log(chalk.red(newNum)+ "  Is Not A Palindrome Number!!")
}