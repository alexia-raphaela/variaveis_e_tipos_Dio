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
    let reversedStr = str.split('')
    return reversedStr.reverse().join('')
}
console.log(receberStr('ovo'))

