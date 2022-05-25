function solution(absolutes, signs) {    
    let result =  absolutes.reduce((v,v2,i) => { return v + v2 }) ;
    signs.forEach((v,i) => { Object.is(v,false) ? (result -= (absolutes[i])*2) : ('')});
    return result;
}

solution([4,7,12],[true,false,true]);