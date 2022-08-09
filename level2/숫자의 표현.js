function solution(n) {
    var answer = 0;
    
    Array.from({length : n+1},(v,i)=>  i).forEach((v,i)=>{
       ((n%i) === 0 && (i%2) === 1) ? (answer ++) : ''
    });
    
    return answer;
}