function solution(arr, divisor) {
    var answer = [];
    arr.forEach((v,i)=>{
       Object.is((v % divisor) , 0 ) ? (answer.push(Number(v))) : ''; 
    })

    return answer.length > 0 ? (answer.sort((a,b) => a - b)) : [-1] ;
}