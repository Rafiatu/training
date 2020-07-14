function redVelvet(str, ltr){
    str = str.toLowerCase()
    ltr = ltr.toLowerCase()
    let counter = 0;
    for(i = 0; i < str.length; i++ ){
        if(str[i] == ltr){
            counter++
        }
    }
    return counter
}

let red = redVelvet("Abednegobobo", "e")
console.log(red)