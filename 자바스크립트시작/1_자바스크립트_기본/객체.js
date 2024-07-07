//중괄호를 사용한다. 
//각 속성에 이름들이 있다. 
const people={
    name:'jin',
    year:2003,
    month:6,
    date:15,
    gender:'W',
    hi:[1,2,[3,4,5]]
};
console.log(people.name) //jin출력
console.log(people['name']) //jin출력 , 따옴표 잊지 말기
console.log(people[0]) //이렇게 하면 jin 출력될까? 안 됨. undefined 출력됨. 

//옵셔널체이닝
/*
객체의 중첩된 속성이나 메서드에 접근할 때, null또는 undefined 에러를 방지하기 위한 방법이다. 
체이닝 연산자 왼편의 프로퍼티 값이 null 또는 undefined이라면 undefined를 반환하고, 그렇지 않은 경우 그 다음 프로퍼티 값을 리턴.
*/
console.log(people.name?.hi)