function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false
    const counts = {}
    for(let char of str1){
        if(counts[char]){
            counts[char]++
        }else{
            counts[char] = 1
        }
    }

    for(let char of str2){
        if(!counts[char]){
            return false
        }
        counts[char]--
    }

    return true
}

const str1 = "silent"
const str2 = "listen"
console.log(isAnagram(str1, str2))

const str3 = "hello"
const str4 = "world"
console.log(isAnagram(str3, str4))

function anagram(s,t){
    return s.split('').sort().join('') === t.split('').sort().join('')
}
const s = "silent"
const t = "listen"
console.log(anagram(s,t))   //true
