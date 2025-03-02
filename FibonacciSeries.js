let n1 = 0;
let n2 = 1;
let range = 10
console.log(n1)
console.log(n2)
for(i=0 ; i<= range; i++){
    let n3 = n1 + n2;
    console.log(n3)
    n1 = n2;
    n2 = n3;
}