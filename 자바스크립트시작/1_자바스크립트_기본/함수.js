function a(){
    console.log('함수 선언문')
}
const b = function(){
    console.log('함수표현식')
}
const c=()=>{
    console.log('화살표함수')
}

let sum=(a,b)=>{
    console.log(a+b)
}
sum(1,2)