const solution = (s) => {

    let answer = false;
        
        if(s.length === 4 || Object.is(s.toString().length,6)){

            if(parseInt(s).toString().length === s.length){
                   answer = true
            }
             

        }

    return answer ; 
}

solution('173e15');