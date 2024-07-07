let name='jin'
console.log(`hello ${name}`)
console.log(`${name}`)
console.log({name})
console.log(name)
// hello jin
// jin
// { name: 'jin' }
// jin

let first=''
console.log(first||'익명')
//first가 비어있는 문자열로 0, 즉 false이기 때문에 익명 출력 

let str='123'
console.log(typeof(Number(str)))
//Number or PraseInt
//String
//Float

//1)숫자0 2)빈문자열 3)null 4)undefined 5)NaN 6)false ->모두 false
