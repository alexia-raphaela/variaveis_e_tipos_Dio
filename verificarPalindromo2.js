function receberStr(str) {
    let reversedStr = reverseString(str)
    return palindromo(str, reversedStr)
}

function palindromo(str, reversedStr) {
    //console.log(str, reversedStr)
   
    if(str === reversedStr){
        return `${str} é um palíndromo`
    } else {
        return `${str} não é palíndromo`
    } 
}

function reverseString(str) {
    str = str.split('')
    let reversedStr = [];
    
    for(let i =  str.length - 1; i >= 0; i--){
        reversedStr.push(str[i])
    }

    return reversedStr.join('')
    
}
console.log(receberStr('raiar'))
