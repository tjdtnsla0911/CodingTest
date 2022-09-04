// 1번 방법
let n = 8;
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
 
console.log(solution(n, arr));
👉🏽 [ -3, -2, -6, 1, 2, 3, 5, 6 ]
 
function solution(n, arr){
    let answer = [];
 
    for (let x of arr){
        if (x<0) answer.push(x);
    }
 
    for (let x of arr){
        if (x>0) answer.push(x);
    }
    return answer
}