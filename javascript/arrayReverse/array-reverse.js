function reverseArray(inputArr){
  let reult=[];
  for (let i;i<=inputArr.length;i++){
    reult.push(inputArr[inputArr.length-i]);
  }
  return reult;
}
