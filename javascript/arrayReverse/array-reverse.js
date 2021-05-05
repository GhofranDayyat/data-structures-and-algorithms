'use strict';
function reverseArray(inputArr){
  let result=[];
  for (let i = 1; i < inputArr.length+1; i++) {
    result.push(inputArr[inputArr.length-i]);
  }
  return result;
}
module.exports=reverseArray;

