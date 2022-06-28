function solution(num) {
    let nums = num;
    let result = 0 ;
    var answer = 0;

    for(let i = 1 ; i<=500; i ++){
        if(nums === 1){
            break;
        }
        
        if((nums % 2 ) === 0){
            result +=1;
            nums = nums  / 2 
        }else{
            result +=1;
           nums = (nums * 3) + 1
        }

    }
        return result >= 500 ? -1 : result
}