function solution(left, right) {
    var answer = 0;
    let result = 0;
    for(let i = left ; i <= right ; i ++){
        
        for(let j = i; j > 0 ; j--){
            
            if((i % j ) === 0){
                result ++;
            }
            
        }
        console.log('result = ',result);
        if((result % 2) === 0){
            answer = answer + i;
        }else{
            answer = answer - i;
        }
        result = 0;
    }
    return answer;
}