function solution(n) {

    return  Number( Array.from(String(n)).sort((a,b) => ( Number(b)- Number(a))).join(''));
}
