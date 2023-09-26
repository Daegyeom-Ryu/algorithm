// const isPalindrome = (string) => {
//     const reverse = (string)=> {
//         let reversedString = '';
//         const helper = (string) => {
//             if (!string)    return;
//             reversedString += string[string.length-1];
//             helper(string.slice(0,string.length-1));
//         }
//         helper(string);
//         return reversedString;
//     }
//     if(string === reverse(string))  return true;
//     return false;
// }
function isPalindrome(str) {
    if(str.length === 1)    return true;
    if(str.length === 2)    return str[0] === str[1];
    if(str[0]===str.slice(-1))  return isPalindrome(str.slice(1,-1));  
    return false;  
}

let string = 'awesome';
console.log(isPalindrome(string));  // false  
string = 'foobar';
console.log(isPalindrome(string));  // false
string = 'tacocat';
console.log(isPalindrome(string));  //  true
string = 'amanaplanacanalpanama';
console.log(isPalindrome(string));  //  true
string = 'amanaplanacanalpandemonium';
console.log(isPalindrome(string));  //  false