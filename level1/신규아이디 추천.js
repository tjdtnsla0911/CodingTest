function solution(new_id) {
    var answer = '';
    let checkValue = 'abcdefghijklnmopqrstuvwxyz1234567890-_.';
    let checkComma = [];
    let checkDuple = '';
    let changeDuple = [];
    let checkLevel3 = [];
    //1단계 소문자 치환
    new_id = new_id.toLowerCase();
    
    //new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    Array.from(new_id).forEach((v,i)=>{  
        if(checkValue.indexOf(v) !== -1){
            answer += v;
        } 
    });
    //3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    answer.split('').forEach((v,i)=>{
        if(v === answer[i+1]){
            console.log('같다!!',v,i);
          checkComma = [...checkComma,i];
          checkComma = [...checkComma,i+1];
    
        }
    });
    console.log('[...new Set(checkComma)] :',[...new Set(checkComma)]);
    //3단계 +중복제거 시키고 전꺼랑 비교해서 이제 치환해야함
    checkLevel3 = Array.from(answer);
    let dataCheck = 0;
    [...new Set(checkComma)].forEach((v,i)=>{ 
            console.log('@@@@@@checkLevel3 = ',checkLevel3);
            if(checkLevel3[v] === checkLevel3[v+1]){
                changeDuple = [... changeDuple , v];
                changeDuple = [... changeDuple , v+1]; //걍일단 중복 시키고 밑에서 제거하자
            }else{
         
                console.log('###changeDuple = ',[...new Set(changeDuple)]);
                
               [...new Set(changeDuple)].reverse().forEach((v,i)=>{
                        if(Math.min(...[...new Set(changeDuple)]) !== v){
                            console.log('다르다 v = ',v);
                            checkLevel3.splice(v,1)
                        } 
                })
                changeDuple = [];
                
            }
        
    })

    console.log('checkLevel3 마지막 = ',checkLevel3.join(''));
    // return answer;
}

solution(`...!@BaT#*..y.abcdefghijklm`);