
let arr=[2,6,8,10,20,22];
document.write(`Every()<br>`);
document.write(`[${arr}]<br>`)
let result=arr.every((e)=>{
    return e%2==0;
})
console.log(result);
document.write(`${result}<br><br>`)

let arr1=[2,17,8,1,3,25];
document.write(`Some()<br>`);
document.write(`[${arr1}]<br>`)
let result1=arr.some((e)=>{
    return e%2==0;
})
document.write(result1)
