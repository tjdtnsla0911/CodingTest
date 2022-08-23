/*
2022-08-21
JavaScript에서 this란 , '누가 나를 불렀느냐'
를 뜻합니다. 즉, 선언이 아니라 호출에 따라 달라진다는뜻

*/
/*
1. 단독으로 쓴  this
무조껀 global Object를 가르킨다.
이건 use strict(엄격모드) 에서도 마찬가지다

*/
//개발자모드에서 출력 결과 : 개발자모드에서 출력 -> Window {0: global, 1: global, 2: global, 3: global, 4: global, window: Window, self: Window, document: document, name: '', location: Location, …}
console.log('this = ',this);
//개발자모드에서 출력 결과 : 위와같음
function myFun(){
    return this;
}
console.log(myFun());

 let a = 10;
 