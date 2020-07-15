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


console.log("Hello".getIndexAt(1))
console.log(getIndexAt("Hello", 1))