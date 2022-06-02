const solution = (x = `야매로 한줄로 풀기@@@`) => {

    return x % (Array.from(String(x)).reduce((sum1,sum2)=>( Number(sum1) + Number(sum2)))) === 0 ? true : false ;

}
