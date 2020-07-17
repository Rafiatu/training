function palindrome(str){
    str = str.toLowerCase()
    let lent = str.length
    for(let i = 0; i < lent/2; i++){
        if(str[i] != str[lent - 1 - i]){
            return false
        }
    }
    return true
}

function palindromeTwo(str){
    str = str.toLowerCase()
    let reversedString = str.reversed()
    return str == reversedString
}

String.prototype.reversed = function(){
    let len = this.length
    let reversedString =""
    for(let i=len-1; i>=0; i--){
        reversedString += this[i]
    }
    return reversedString
}
console.log(palindromeTwo("Lawal"))