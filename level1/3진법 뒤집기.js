function solution(n) {

    return  Number.parseInt(Array.from(n.toString(3)).reverse().join('') , 3);

}