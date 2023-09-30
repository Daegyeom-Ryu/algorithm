function digitCount(num) {
    if(num === 0)   return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function getDigit(num, i) {
    return Math.floor(num / Math.pow(10, i)) % 10;
}
function mostDigit(arr) {
    let maxDigit = 0;
    arr.forEach((num)=>{
        curDigit = digitCount(num);
        maxDigit = Math.max(curDigit, maxDigit);});
    return maxDigit;
}
function radixSort(arr) {
    if(!arr)    return undefined;
    const iteration = mostDigit(arr);
    for(let i = 0; i < iteration; i++) {
        const bucket = new Array();
        // const bucket = Array.from({length:10},()=>[]);
        arr.forEach((num)=> {
            const digit = getDigit(num,i);
            if(!bucket[digit])  bucket[digit] = [];
            bucket[digit].push(num);
        });

        arr = [];
        bucket.forEach((numsArray)=> arr = arr.concat(numsArray));
        // arr = [].concat(...bucket);
    }
    return arr;
} 
let arr = [577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127];
console.log(radixSort(arr));

