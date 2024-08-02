function* generate(){
  console.log('제너레이터 실행')
  console.log('1생성');
  yield 1;
  console.log('2생성');
  yield 2;
  console.log('3생성');
  yield 3;  
} //제너레이터 함수는 일반 함수와 달리 호출할 때 즉시 실행되지 않는다 

let gen = generate();
let result = gen.next();
result = gen.next();
result = gen.next();
console.log(gen)
//yield문은 이터레이터의 next()메서드가 호출될 때 값을 반환한다. 
