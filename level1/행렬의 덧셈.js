function solution(arr1, arr2) {
    var answer = [];

    arr1.forEach((v,i)=>{  answer[i] =  v.map((k,j) =>( k + arr2[i][j])) });

    return answer;
}

