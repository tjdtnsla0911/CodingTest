const solution = (array = '한방코드 ㅍㅌㅊ?', commands,result) =>{
    
    return commands.map((v,i) => { return array.slice((v[0]-1),v[1]).sort((k,j)=>{ return k - j})[v[(v.length)-1]-1]; });
      
 }
 
 solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]],[])