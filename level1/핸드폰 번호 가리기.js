function solution(phone_number) {
    return Array.from(phone_number).map((v,i)=>((Array.from(phone_number).length - 4) <= i ? v : '*')).join('');
}