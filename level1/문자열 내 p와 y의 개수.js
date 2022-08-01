function solution(s){
    var answer = true;
    let result = Array.from(s);
    let dataresult = 0;
    result.forEach((v)=>{
        if(v === 'p' || v === 'P'){
            dataresult += 1;
        }else if(v === 'y' || v === 'Y'){
            dataresult -= 1;
        }
    });
    
    Object.is(dataresult, 0) ? (answer = true) : ( answer = false)

    return answer;
}