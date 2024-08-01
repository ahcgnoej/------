let div = document.querySelector('div')
function changeContent(){
  div.outerHTML = '<h1>DOM API</h1><p>선수 조건 : 없음</p>'
}

const banana = document.getElementById('banana')
banana.style.background='yellow';
const elem = document.getElementsByTagName('li');
[...elem].forEach(elem=>{elem.style.color='red'})

const fruit = document.getElementsByClassName('fruit')
