// /*
// Question 5:


// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by,
// splicing together the nodes of the first two lists.
// Return the head of the merged linked list

// */
import chalk from 'chalk';


let arrA = [0,1,2,3,4,5,6];
let arrB = [1,3,4,5,6,7];

const mergeTwoList = function(arrA,arrB){
    let twoList = [];
    while(arrA.length && arrB.length){
        if(arrA[0] < arrB[0]){
            twoList.push(arrA[0]);
            arrA.shift();
        }else{
            twoList.push(arrB[0]);
            arrB.shift();
        }
    }
    return twoList.concat(arrA,arrB);
}
console.log(chalk.green("output:"))
console.log(mergeTwoList(arrA,arrB));