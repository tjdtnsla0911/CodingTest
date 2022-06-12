function solution(a, b) {

    return a.map((v,i)=>( v * b[i])).reduce((a,b)=>( a + b));
    
}

solution([1,2,3,4],[-3,-1,0,2]);