// return new object(number transfered to string) without changing primary object
function stringifyNumbers(object) {
    const newObject = {};
    for(const key in object) {
        if(object[key] instanceof Object && !Array.isArray(object[key]))
            newObject[key] = stringifyNumbers(object[key]);   
        else if(typeof object[key] === 'number')    
            newObject[key] = object[key].toString();
        else    newObject[key] = object[key];
    }
    return newObject;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

let newObj = stringifyNumbers(obj);
console.log(newObj);
console.log(obj);


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
