// is Palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, '')
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}

console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome("No lemon no melon"));


// is Flatten Array
function flattenArray(arr) {
   return arr.reduce((acc, val) => {
        if(Array.isArray(val)){
            return acc.concat(flattenArray(val));
        }
        else {
            return acc.concat(val);
        }
    }, []);
}

console.log(flattenArray([1, 2, [3, 4, [5, 6]]]));
console.log(flattenArray([1, [2, [3, 4], [[5]]]]));
console.log(flattenArray([[1], [2], [3]]));
console.log(flattenArray([[[1], [[[2]]], [[[[[[[3]]]]]]]]]));

// deep clone object

function deepClone(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)){
        return obj.map(item => deepClone(item));
    }
    const clone = {};
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}

const obj = {a: 1, b: 2, c: {d: 3, e: 4}};
const clone = deepClone(obj);
clone.a = 5;

console.log(obj);
console.log(clone);


