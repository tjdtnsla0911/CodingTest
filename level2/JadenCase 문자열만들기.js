function solution(s) {
    let result =[];
    var answer = '';

    let change = s.replace(/ +(?= )/g,'').split(' ');

    change.forEach((v , i)=> {
        
        let arr = v.toLowerCase().split('');

        if(typeof(arr[0]) === 'string'){
            
            arr[0] = arr[0].toUpperCase();
            answer = answer + arr.join('') + " ";
        }

    });

    return answer.slice(0 , -1);
    
}