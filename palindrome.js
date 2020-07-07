let longestPalindrome = function (string){
    if(string.length === 1 ||string === "") return string;
    let arr = [];
    for(let i = 0; i < string.length; i++){
        let str = string[i];
        for(let j = i + 1; j < string.length; j++){
            str += string[j];
            let result = isPalindrome(str);
            if(result === true){
                arr.push(str);
            }
        }
    }
    if(arr.length === 0) return string[0];
    let longest = longestString(arr);
    return longest;
}

let isPalindrome = function(str){ //'racecar'
    let copy = str.slice(); // copy = 'racecar'
    let copyReverse = copy.split('').reverse().join(''); // ['r','a','c','e','c','a','r'] -> reverse same ... join it together to a string again
    return copyReverse === str; //compare original to reversed
}

let longestString = function(arr){
    let longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
    
    return longest;
}
