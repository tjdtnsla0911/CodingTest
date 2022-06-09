function solution(num) {
    
    var answer = '';
    
    if(num < 0){
        num = num * -1
    }
    return num%2 === 1 ? (`Odd`) : (`Even`);

}