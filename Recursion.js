function fact(n){
    if(n===0){
        return 1
    }else{
        return n * fact(n-1)
    }
}

const result = fact(5)
console.log(result)