//중괄호를 사용한다. 
//각 속성에 이름들이 있다. 
const people={
    name:{
        first:'jin',
        last:'cj'
    }
};
console.log(people.name.first)//jin출력
console.log(people.name.first.hi)//hi가 없기 때문에 오류 남
console.log(people.name.first?.hi)//옵셔널체이닝을 사용했기 때문에 hi가 없어도 오류 안 남

