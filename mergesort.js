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
        if(arr1[i] <= arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            ++compCount;    // for time complexity count
        } else {
            newArr.push(arr2[j]);
            j++;
            ++compCount;    // for time complexity count
        }  
    }
    while(i<arr1.length) {
        newArr.push(arr1[i]);
        i++;
        ++compCount;        // for time complexity count
    }   
    while(j<arr2.length) {
        newArr.push(arr2[j]);
        j++;
        ++compCount;        // for time complexity count   
    }
    return newArr;
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
mergeSort(unOrderedArr);
console.log(` Time Complexity: ${compCount}, unOrderedArr`);

compCount = 0;
mergeSort(orderedArr);
console.log(` Time Complexity: ${compCount}, orderedArr`);
