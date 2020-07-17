function getIndexAt(str,num){
    var result = str[num]
    
    if(result != undefined){
        return result

    }
    throw new Error("Out of index error")
}

String.prototype.getIndexAt = function(num){
    var result = this[num]
    
    if(result != undefined){
        return result

    }
    throw new Error("Out of index error")
}

var num = null

console.log(num)
console.log(getIndexAt("Hello", 1))