function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
    }
    for(let i=0;i<arr.length-1;i++) {
        let minValIdx = i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[minValIdx] > arr[j]) minValIdx = j;
        }
        if(minValIdx !== i) swap(arr, i, minValIdx);        
    }
    return arr;
}
console.log(selectionSort([10,9,8,1,2]));