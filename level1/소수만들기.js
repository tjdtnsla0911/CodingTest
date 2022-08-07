function solution(nums) {
    var answer = [];
    let data = nums.sort((a,b)=>{ return Number(a) - Number(b)});

    data.forEach((v,i) => {
        
        for(let j = (i + 1); j < data.length ; j++){
       
            if(!Object.is((data[j + 1]),undefined) ){

                for(let k = (j + 1); k < data.length ; k++){

                    if(data[k] == undefined ){

                            return;
                    }
                    if(isPrime(v + data[j] + data[k])){
                          answer.push(v + data[j] + data[k]);
                    }
                 }
            }
        }
    });
    
    return answer.length 
}

 
//소수판별 함수
function isPrime(num) {
  
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){

      return false; 
    }
  }

  return true; 
}