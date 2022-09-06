function time(t){

   let result = 0;
   let checkTime =  Number(Array.from(t).map((v)=>{ return isNaN(v) ? 0 : Number(v)}).join(''));
   //사무실에 잇엇던 사람들 = 출근시간 퇴근시간
   let times = '09:12:23 11:14:35 10:34:01 13:23:40 10:34:31 11:20:10 10:55:01 11:02:40 13:55:01 14:02:40'.split(' ');
   for(let i = 0 ; i < times.length ; i = i + 2){
        let minTime = Number(Array.from(times[i]).map((v)=>{ return isNaN(v) ? 0 : Number(v)}).join(''));
        let maxTime = Number(Array.from(times[i + 1]).map((v)=>{ return isNaN(v) ? 0 : Number(v)}).join(''));

        if(checkTime >= minTime && checkTime <= maxTime){
         
            result ++ ;
        }

   }
   return result;
}
//퇴근시간
console.log(time('11:05:20') + '명이 사무실에 있었다.');