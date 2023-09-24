function bubblesort(arr) {
    const swap = (arr, idx1, idx2, swapped) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        swapped = true;
        return swapped;
    };
    for(let i = arr.length; i>0; i--){
        let swapped = false;
        for(let j = 0; j < i-1; j++) {
            if(arr[j]>arr[j+1]) swapped = swap(arr, j, j+1, swapped);
        }
        if(!swapped)  break;
    }
    return arr;
}
bubblesort([10,9,8,1,2]);