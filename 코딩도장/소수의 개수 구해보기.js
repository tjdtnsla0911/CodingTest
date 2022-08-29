

const result = () => {
    let end = 0;
    let arr = Array.from({length : (1000 - 1)},(v,i)=>{return i + 2});

    arr.forEach((v,i)=>{
        isPrime(v) ? (end ++) : '';
    });

    return end;

}

result();


function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for(let i = 2; num > i; i++) {
    if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
     }
    }
   // 소수는 1보다 큰 정수임으로
   // 1보다 작으면 false를 리턴한다
   return num > 1;
  }
  