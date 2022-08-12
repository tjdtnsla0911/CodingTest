function solution(n) {
    var answer = "";
    //1,2,4만 사용 -> 3진법 유사
    //3으로 나눈 나머지를 이용 순서 4,1,2
    let mod = ["4","1","2"];
    
    while(n > 0){
        //3으로 나눈 나머지 저장
        answer = mod[n%3] + answer;
        //3과 정확히 떨어지면 몫이 1이 생기기 때문에 -1을 해준후 계산한다.
        n = parseInt((n-1)/3);
    }
    return answer;
}
출처: https://ghost4551.tistory.com/108 [프론트 개발자들을 위한 티스토리:티스토리]