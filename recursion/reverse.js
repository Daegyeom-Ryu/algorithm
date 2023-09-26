
// function reverse(string) {
//     let newString ='';
//     function helper(string) {
//         if(!string) return;
//         newString = newString + string[string.length-1];
//         helper(string.slice(0,string.length-1));
//     }
//     helper(string);
//     // for(let i=string.length-1;i>=0;i--){
//     //     newString += string[i];
//     // }
//     return newString;
// }
function reverse(str) {
    if(str.length===1)   return str;
    return reverse(str.slice(1)) + str[0];
}
let string = 'awesome';
console.log(reverse(string));

