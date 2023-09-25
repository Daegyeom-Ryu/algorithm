function mergeSort(arr) {
    if(arr.length <= 1)    return arr;
    let midIdx = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0,midIdx));
    let right = mergeSort(arr.slice(midIdx, arr.length));

    return merge(left, right);
}

function merge(arr1,arr2) {
    let newArr = [];
    let i = 0, j = 0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }  
    }
    while(i<arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }   
    while(j<arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}
console.log(mergeSort([10,9,8,1,2]));

