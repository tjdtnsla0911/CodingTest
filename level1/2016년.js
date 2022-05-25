function solution(a, b) {
    
    return ['SUN','MON','TUE','WED','THU','FRI','SAT'][new Date(`2016-${a}-${b}`).getDay()];
   
}

solution(5,24)