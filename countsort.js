function countSort(arr) {
    // make array which has length of maximum number of array + 1
    if(!arr)    return undefined;
    let maxNum = 0;
    arr.forEach((num)=>maxNum = Math.max(num, maxNum));
    const count = Array.from({length: maxNum + 1}, ()=>0);
    // count the number of num and store counting in count
    arr.forEach((num)=>count[num]+=1);
    // count Array -> countSum Array(its value become index of result Array)
    // for reducing looping time(countSum Array length is equal to input Array length)
    for(let i = 1; i < count.length; i++)    count[i] += count[i-1];
     
    let result = [];
    for(let i = arr.length - 1; i>=0; i--) {
        j = arr[i];
        count[j] = count[j]-1;  // do first for duplicated value
        result[count[j]] = arr[i];
    }    
    
    return result;
}
let arr = [577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127];
// let arr = [10,9,9,8,7,6,6,5,4,3,2,1];
console.log(countSort(arr));