//메소드 내부에서 this 키워드 사용하기 
const pet = {
  name: '구름',
  eat : function(food){
    console.log(this.name+'은/는'+food+'을/를 먹습니다')
  }
}
pet.eat('밥')

//동적으로 객체 속성 추가/제거
const student= {}
student.이름 = '채정'
student.취미 = '개발'
student.장래희망 = '개발자'
console.log(JSON.stringify(student,null,2))
//JSON.stringify 함수
//javascript 객체를 JSON 문자열로 변한한다. 이 함수는 세가지 인수를 받는다 
//JSON.stringify(변환할객체,리플레이서 함수 또는 배열,들여쓰기 칸 수)
//왜 사용하는가? 1) 가독성 : 가독성을 높임 2) 콘솔에 객체를 읽기 쉽게 출력할 수 있어 디버깅할 때 유용 