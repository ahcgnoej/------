const uniq = (array) =>[...new Set(array)]
console.log(uniq([1,1,1,2,3]))

//여기서 const uniq = (array) =>[...new Set(array)]는 단일 표현식이다
// 그래서 중괄호를 생략하고 표현식을 바로 작성하면 그 표현식이 암시적으로 반환된다. 
// 여러줄 본문일 때는 const uniq = (array) =>{return [...new Set(array)]} 이런식으로 중괄호 사용과 꼭 return 키워드를 사용해야 한다