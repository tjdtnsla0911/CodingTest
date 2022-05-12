const solution = (numbers) =>{
    const comparison = [1,2,3,4,5,6,7,8,9,0];
    let answer = 0 ;
    comparison.forEach((v,i)=>{
        
      if(-1 === numbers.indexOf(v)){
              answer = answer + v;
      }
        
    });
    
    return answer;
}
solution([5,8,4,0,6,7,9]);


