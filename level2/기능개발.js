function solution(progresses, speeds) {
    var answer = [];
    let checkResult = [];
    let checkData2 = 0;
    let checkData3 = 500;
    
    progresses.forEach((v,i)=>{
        let checkValue = 0;
    
        for(let k = v ; k<= 1000; k = k + speeds[i]){
            checkValue+= 1;
            if(k >= 100){
                checkValue -= 1;
                checkResult.push(checkValue);
                break;
            }
        }
    });
    
    for(let i = 0; i < checkResult.length; i++) {

      checkData2 = checkResult.findIndex(e => e > checkResult[i]);
      
      if(checkData3 === 500 || Object.is(checkData3,i)){
          
          checkData3 = checkData2;
            
          checkData3 === -1 ? (answer.push(checkResult.length - i)) : (answer.push(checkData3 - i))
      }
    }
    return answer;
}