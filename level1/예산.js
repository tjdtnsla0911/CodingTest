function solution(d, budget) {

    //좀 억지긴 하지만 한줄로 성공
    return  d.sort((a,b)=>{return a - b}).map((v,i)=>((budget - v) >= 0 ? (budget = budget -v, 1) : 0)).filter(k=> ( k === 1 )).length;

}
