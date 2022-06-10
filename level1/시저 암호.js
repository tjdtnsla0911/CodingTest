function solution(s, n) {
    const obj = 'abcdefghijklmnopqrstuvwxyz';
    const obj2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    console.log(' 배열로 변환한거 = ', s.split(''));
    s.split('').forEach((v = false,i) => {
  
          if(obj.indexOf(v) !== -1){
             
             result += obj.split('')[(obj.indexOf(v) + n) % 26];
              
          }else if(obj2.indexOf(v) !== -1){
              result += obj2.split('')[`${obj2.indexOf(v) + n % 26}`];
          }else{ //값이 ''가 아니라 ' '임 ㅋㅋㅋ 비교할때 그래서 짜증났음..
              result += v;
          }
      
    });
       return result
  }
  
  solution("a B z",4);