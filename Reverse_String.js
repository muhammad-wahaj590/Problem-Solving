function reverse(str){
    reverseStr = []
    for(let i=str.length-1; i>=0; i--){
        reverseStr.push(str[i])
    }
    return reverseStr
}

const str =  ["h","e","l","l","o"]
console.log(reverse(str))