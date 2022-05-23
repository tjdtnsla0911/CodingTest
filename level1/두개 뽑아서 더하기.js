function solution(numbers) {
    
    var answer = [];
    numbers.sort((k,v)=> { return k - v}).forEach((v,i)=>{
        
            numbers.forEach((k,j)=>{
                
                if(i < j){
                
                    if( -1 === answer.indexOf(v + (numbers[j]))){
                        
                        answer = [...answer , v + (numbers[j])];
                    }
                }
            });
    })

    return answer.sort((k,v)=> { return k - v});
}

solution([5,0,2,7])



