function solution(n){
    var answer = 0;
    Array.from(String(n)).forEach((v)=>{
        answer+= Number(v);
    });

    return answer;
}