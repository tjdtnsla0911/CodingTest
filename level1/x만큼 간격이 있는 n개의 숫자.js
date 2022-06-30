function solution(x, n) {
    var answer = [];
    answer = [...answer , ... Array.from({length : n + 1}, (v,i)=> i * x)]
    answer.splice(0,1);
    return answer;
}