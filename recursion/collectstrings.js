const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
// return string Array which is extracted from object 
function collectStrings(object) {
    let arr = [];
    for(const key in object) {
        if(object[key] instanceof Object && !Array.isArray(object[key])) 
            arr = arr.concat(collectStrings(object[key]));
        else if(typeof object[key]==='string')
            arr.push(object[key]);
    }
    return arr;
}

function collectStringsUsingHelper(object) {
    const arr = [];
    function helper(obj) {
        for(const key in obj) {
            if(obj[key] instanceof Object && !Array.isArray(obj[key]))
                helper(obj[key]);
            else if(typeof obj[key]==='string')
                arr.push(obj[key]);
        }
    }
    helper(object);
    return arr;
}
let arr = collectStrings(obj) // ["foo", "bar", "baz"])
console.log(arr);
arr = collectStringsUsingHelper(obj);
console.log(arr);