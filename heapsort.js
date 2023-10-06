function heapSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    function heapify(arr, left, right) {
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
            compCount++;    // for time complexity count
        }
        arr[parent] = temp;
        compCount++;        // for time complexity count
    }
    let n = arr.length;
    for(let i = Math.floor((n - 1)/2); i >= 0; i--) {
        heapify(arr,i,n-1);
    }
    for(let i = n - 1; i > 0; i--){
        swap(arr, 0, i);
        heapify(arr,0,i-1);
    }
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

let unOrderedArr = generateUnorderedArray(3000);
let orderedArr = generateOrderedArray(3000);

let compCount = 0;
heapSort(unOrderedArr);
console.log(` Time Complexity: ${compCount}, unOrderedArr`);

compCount = 0;
heapSort(orderedArr);
console.log(` Time Complexity: ${compCount}, orderedArr`);

