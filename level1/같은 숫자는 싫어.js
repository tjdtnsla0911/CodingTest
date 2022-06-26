function solution(arr)
{
    var answer = [];
    arr.forEach((v,i)=>{
       if(arr[i-1] !== arr[i]) {
            answer.push(arr[i]); 
       }
    });
    return answer;
}
