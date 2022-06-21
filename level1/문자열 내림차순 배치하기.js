function solution(s) {
    var answer = '';
    Array.from(s).sort().reverse().forEach((v)=>{answer = answer + v})
    return answer ;
}
solution('Zgbcdefggg');