//forEach()로 배열 순회 
//배열이름.forEach()의 인자로 함수를 전달하면 배열의 모든 요소를 순회할 때 함수의 인자로 배열의 요소를 전달해준다. 
function myFunc(item){
  console.log(item)
}
const arr = ['apple','kiwi','grape']
arr.forEach(myFunc)

//forEach()로 배열 순회 더 간단하게 : Lambda(Arrow function)로 구현 
let num = [1,2,3,4,5]
let sum = 0
num.forEach(n=>{sum+=n});
console.log(sum)
arr.forEach((item,index)=>{
  console.log('index: '+index+', item: '+item);
})
