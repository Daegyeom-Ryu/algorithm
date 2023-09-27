// return first-character capitalized strArray
function capitalizeFirst(strArray) {
    if(strArray.length===1)  return [strArray[0][0].toUpperCase() + strArray[0].substring(1)];
    let firstChar = strArray.slice(-1)[0][0].toUpperCase();
    let seqStr = strArray.slice(-1)[0].substring(1);
    return capitalizeFirst(strArray.slice(0,-1)).concat([firstChar + seqStr]);
}

console.log(capitalizeFirst(['car','taco','banana']));  // ['Car','Taco','Banana']