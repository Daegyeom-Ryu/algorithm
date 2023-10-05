function heapSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    function downHeap(arr, left, right) {
        let temp = arr[left];
        let parent = left;
        while(parent < Math.floor((right+1)/2)) {
            let lChild = 2 * parent + 1, rChild = 2 * parent + 2;
            let child = lChild;
            if(rChild <= right) 
                child = arr[lChild] < arr[rChild] ? rChild : child;
            if(temp > arr[child])    break;
            arr[parent] = arr[child];
            parent = child;
        }
        arr[parent] = temp;
    }
    let n = arr.length;
    for(let i = Math.floor((n - 1)/2); i >= 0; i--) {
        downHeap(arr,i,n-1);
    }
    for(let i = n - 1; i > 0; i--){
        swap(arr, 0, i);
        downHeap(arr,0,i-1);
    }
}

let arr = [1,3,5,7,9,2,4,6,8,10];
heapSort(arr);