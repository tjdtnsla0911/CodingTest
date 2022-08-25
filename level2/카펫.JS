function solution(brown, yellow) {
    var answer = [];
    let total = brown+yellow
    let toplimit = parseInt(Math.sqrt(total))
    let lowlimit = 3;
    const arr = [];
    for(let i = lowlimit; i<=toplimit;i++){
        if(total%i ==0){
            arr.push(i)    
        }
    }
    for(let i = 0;i<arr.length;i++){
        let x = total/arr[i]
        let brow =(x*2)+(arr[i]*2)-4
        if (brow == brown){
            answer.push(x)
            answer.push(arr[i])
        }
    }
    return answer;
}