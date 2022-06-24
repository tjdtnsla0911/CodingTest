function solution(n) {
    
    return  [...new Set(Array.from({length : n},(a,b)=> b).map( a => ( n % a === 1 ? a :  0) ))][1];
  
  }