let range = {
  from:1,
  to: 5
}
range[Symbol.iterator]=function(){
  return{
    current : this.from,
    last : this.to,
    next(){
      if(this.current<=this.last){
        return {done : false, value : this.current++};
      }else{
        return {done : true}
      }
    }
  }
}

/*여기서 이터러블 객체는 range이다. 왜냐하면 Symbol.iterator 메서드를 가지고 있기 때문이다. 이터레이터 객체는 Symbol.iterator()메서드에서 리턴한 객체가 이터레이터다. 왜냐면 이 객체 안에는 {value:값, done:true/false}를 리턴하는 next()메서드가 있기 때문 */