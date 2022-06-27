function solution(n) {
    /*
    그냥 가장쉽게 푸는 방법    */

    var answer = 0;
    
    for(let i = 1; i <= n; i ++){
        Object.is((n%i),0) ?  (answer += i) : '';
    }

    return answer;
}
