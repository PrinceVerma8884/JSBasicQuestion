//"Program to check that the given number is armstrong or not");
let number = 1634;
let numLen = (number.toString().length)
let sum = 0;
let temp = number;
while(number>0){
    let num = Math.floor(number % 10);
    sum = sum + Math.pow(num, numLen)
    number = Math.floor(number / 10)
}
if(temp == sum){
    console.log("Its Armstrong")
}else{
    console.log("Not Armstrong")
}