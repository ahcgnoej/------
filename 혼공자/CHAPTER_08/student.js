// const students = []
// students.push({이름 : '구름', 국어 : 87, 영어 : 98, 수학 : 88, 과학 : 90})
// students.push({이름 : '별이', 국어 : 92, 영어 : 98, 수학 : 96, 과학 : 88})
// students.push({이름 : '겨울', 국어 : 76, 영어 : 96, 수학 : 94, 과학 : 86})
// students.push({이름 : '바다', 국어 : 98, 영어 : 52, 수학 : 98, 과학 : 92})

// console.log(JSON.stringify(students,null,2))

// let output = '이름\t총점\t평균\n'
// for (const s of students){
//   const sum = s.과학+s.국어+s.수학+s.영어
//   const average = sum/students.length
//   output += `${s.이름}\t${sum}점\t${average}점\n`
// }
// console.log(output)

class Student {
  constructor (이름, 국어, 영어, 수학, 과학){
    this.이름 = 이름
    this.국어 = 국어
    this.영어 = 영어
    this.수학 = 수학
    this.과학 = 과학
  }
  getSum(){
    return this.국어 + this.영어 + this.수학 + this.과학
  }
  getAverage(){
    return this.getSum()/4
  }
  toString(){
    return `${this.이름}\t${this.getSum()}\t${this.getAverage()}점\n`
  }
}
const students = []
students.push(new Student('구름',87,98,88,90))
students.push(new Student('구름',92,98,96,88))
students.push(new Student('구름',76,96,94,86))
students.push(new Student('구름',98,52,98,92))

let output = '이름\t총점\t평균\n'
for(const s of students){
  output+=s.toString()
}
console.log(output)