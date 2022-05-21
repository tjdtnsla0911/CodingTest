const solution = (answers) => {
    let obj = new Object();
    obj.member1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    obj.member2 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
    obj.member3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
     
    let result = [0,0,0];
    let returnValue = [];
    
    answers.forEach((v,i)=>{
        Object.is(obj.member1[i % obj.member1.length] , v) ? (result[0] = result[0] + 1) : ('')
        Object.is(obj.member2[i % obj.member2.length] , v) ? (result[1] = result[1] + 1 ) : ('')
        Object.is(obj.member3[i % obj.member3.length] , v) ? (result[2] = result[2] + 1 ) : ('')
 
    });
    //return값은 없지만 걍 map씀 ㅋ
    result.map((v,i)=>{
        if(Math.max.apply(null,result) === v){
            returnValue = [...returnValue, i + 1]
        }
    })
    return returnValue;
}

solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);