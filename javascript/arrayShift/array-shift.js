'use strict';
function insertShiftArray (arry,num){
  const resArr=[];
  const middle= Math.ceil(arry.length/2);
  if(arry.length){
    for(let i=0; i<middle;i++){
      resArr.push(arry[i]);
    }
    resArr.push(num);
    for(let i=middle; i<arry.length;i++){
      resArr.push(arry[i]);
    }
  }else{
    resArr.push(num);
  }
  return resArr;


}
module.exports=insertShiftArray;
