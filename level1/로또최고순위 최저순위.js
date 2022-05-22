function solution(lottos, win_nums) {
    var answer = [0,0];
    let result = [0,0];
    win_nums.forEach((v,i)=>{
         if(lottos.indexOf(v) !== -1 ){
             answer[0] = answer[0] +1;
             answer[1] = answer[1] +1;
         }
    });

    let zeroCount = lottos.filter(element => 0 === element).length;
    answer[0] = answer[0] + zeroCount;
    
    if(answer[0] === 0){
        result[0] = win_nums.length;
    }else{
        result[0] = (win_nums.length+1) - answer[0];
    }
    
    if(answer[1] === 0){
        result[1] = win_nums.length;
    }else{
         result[1] = (win_nums.length+1) - answer[1];
    }

    return result;
}

solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]);