let year=12
if (year<12){
    console.log('땡')
}else if (year>12){
    console.log('음')
}else{
    console.log('정답')
}

let condition=false
let result=condition?console.log('h1'):console.log('hihi')
result??console.log('hi') //이건 출력 됨, 왜냐? result는 식이 들어가 있고 얘네는 undefined를 반환하니까.
condition??console.log('condition') //왜 얘는 출력이 안 되지? 왜냐면 condition은 true거든. false여도? 출력 안 됨, 왜냐면 bool이라는 게 들어가 있으니까.
let a=1
a??console.log(a)//얘도 출력 안 되네?
/*
const result = expression ?? defaultValue;
여기서 expression이 null 또는 undefined일 경우 defaultValue는 반환될 값.
변수에 값이 할당되지 않았을 때 기본값을 제공하고자 할 때 유용하다. 
*/
/*아래처럼 함수 매개변수에 기본값을 설정하거나 api호출 결과와 같이 예측 불가능한 데이터에 대한 기본값을 설정할 때 사용할 수 있음
function greet(name){
    const userName=name??'Guest';
    console.log(`Hello ${userName}`);
}
*/