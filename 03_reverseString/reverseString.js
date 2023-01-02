const reverseString = function(str) {
    const arr = str.split("");
    const out = [];
    for(let i = arr.length; i >= 0; i--){
        out.push(arr[i]);
    }
    return out.join("");
};

// Do not edit below this line
module.exports = reverseString;
