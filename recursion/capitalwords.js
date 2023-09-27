// return capitalized strArray;
function capitalizeWords(strArray) {
    if(strArray.length === 0)   return [];
    if(strArray.length === 1)   return [strArray[0].toUpperCase()];
    let capitalString = strArray.slice(-1)[0].toUpperCase();
    return capitalizeWords(strArray.slice(0,-1)).concat([capitalString]);
}
let result = capitalizeWords(['hello','My','friEnd']);
console.log(result);    // ['HELLO','MY','FRIEND']

