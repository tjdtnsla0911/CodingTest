function solution(nums) {
    let answer = 0;
    const set = [...new Set(nums)];
    
    if(set.length >= (nums.length)/2){
        return nums.length / 2 ;
    }else{
        return set.length;
    }
}
solution([3,3,1,2,2,4])