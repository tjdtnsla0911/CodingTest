function solution(a, b) {
    var answer = 0;
    if (a < b) {
        for (a; a <= b; a++) {

            answer = answer + a;
        }
    } else {
        for (b; b <= a; b++) {

            answer = answer + b;
        }
    }
    return answer;
}

solution(3, 5);