function flatten(array) {
    let newArray = [];
    for(let i = 0; i<array.length; i++) {
        if(Array.isArray(array[i])) newArray = newArray.concat(flatten(array[i]));
        else    newArray.push(array[i]);
    }
    return newArray;
}

  
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]


// console.log([1,2,3,4]+[5,6,7,8]);
console.log('string'+'love');
console.log([1,2,3,4].concat(5,6,7,8));
console.log('string'.concat('love'));