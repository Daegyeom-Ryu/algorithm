function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    const swap = (array, idx1, idx2) => {
        [array[idx1],array[idx2]] = [array[idx2], array[idx1]];
    }
    let pivotIdx = startIdx;
    const pivot = arr[startIdx];    
    
    for(let i = startIdx; i <= endIdx; i++) {
        if(pivot > arr[i])  swap(arr, ++pivotIdx, i);
        ++compCount;
    }    
    swap(arr, pivotIdx, startIdx);
    ++compCount;    // for time complexity count
    return pivotIdx;
}
function quickSort(arr, left = 0, right = arr.length - 1) {  
    if(left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}
// generate array
function generateUnorderedArray(numberOfArray=1000) {
    const arr = [];
    let num = 0;
    arr.push(num);
    for (let i = 1; i<numberOfArray; i++) {
        num = Math.floor(Math.random() * numberOfArray);
        while(arr.includes(num))    num = Math.floor(Math.random() * numberOfArray);
        arr.push(num);
    }
    return arr;
}
function generateOrderedArray(numberOfArray=1000) {
    const arr = [];
    for(let i = 0; i<numberOfArray; i++) {
        arr.push(i);
    }
    return arr;
}

let unOrderedArr = generateUnorderedArray(2000);
let orderedArr = generateOrderedArray(2000);

let compCount = 0;
quickSort(unOrderedArr);
console.log(` Time Complexity: ${compCount}, unOrderedArr`);
compCount = 0;
quickSort(orderedArr);
console.log(` Time Complexity: ${compCount}, orderedArr`);

