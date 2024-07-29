//윤년 구하기
function isLeapYear(year) {
  return(year%4===0 && year%100!==0 || year%400===0)
}
console.log(isLeapYear(2020))

//최솟값 구하기 
function min(array) {
  let num=array[0];
  for(let i=1; i<=array.length; i++){
    if(num>array[i]){
      num=array[i]
    }
  }
  return num;
}
minArray = [7,8,4,6,9,34,1,44,80]
console.log(min(minArray))

//나머지 매개변수를 사용한 배열
function sample(...item){
  console.log(item)
}
sample(1,2)
sample(1,2,3,4)
sample(1,2,3,4,5)

//나머지 매개변수를 사용한 최소값 구하기 
function min(...items) {
  let num=items[0];
  for(const item of items){
    if(num>item){
      num=item 
    }
  }
  return num;
}
console.log(min(7,8,4,6,9,34,1,44,80))

//매개변수와 나머지 매개변수 조합
function sample(a,b,...c){
  console.log(a,b,c)
}
sample(1,2) // 1 2 []
sample(1,2,3) // 1 2 [3]
sample(1,2,3,4) // 1 2 [3,4] 

//여러 번 반복 입력되는 매개변수에 기본값을 지정하여 사용
function earnings(name,wage=8590,hours=40){
  console.log(`# ${name} 님의 급여 정보`) 
  console.log(`- 시급: ${wage}`)
  console.log(`- 근무 시간: ${hours}`)
  console.log(`- 급여: ${wage*hours}`)
}
earnings('구름')
earnings('구름',10000)
earnings('구름',10000,52)

//콜백함수
function callThreetimes(callback){
  for(let i=0; i<3; i++){
    callback(i)
  }
}
function print(i){
  console.log(`${i}번째 함수 호출`)
}
callThreetimes(print)

//forEach() 메소드
const numbers = [273,52,103,32,57]
numbers.forEach(function(value,index,array){
  console.log(`${index}번째 요소 : ${value}`)
})

//map() 메소드
let numbers1 = [273,52,103,32,57];
numbers1=numbers1.map(function(value,index,array){
  return value*value
})
numbers1.forEach(console.log)

//filter 메소드
const n = [0,1,2,3,4,5]
const evenNumbers= n.filter(function(value){
  return value%2===0
})
console.log(`원래 배열 : ${n}`)
console.log(`짝수만 추출 : ${evenNumbers}`)

//화살표 함수 
let nn=[0,1,2,3,4,5,6,7,8,9]
nn
.filter((value)=> value%2===0)
.map((value)=>value*value)
.forEach((value)=>{
  console.log(value)
})

//타이머 함수
setTimeout(()=>{
  console.log('1초 후에 실행')
},1*1000)
let count=0
let id = setInterval(()=>{
  console.log(`1초마다 실행 ${count}번째`)
  count++;
},1*1000)
setTimeout(()=>{
  console.log('타이머 종료')
  clearInterval(id)
},5*1000)