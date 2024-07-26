let star = 10;

//------------------------------

let starResult = '';
for (let i=1; i<=star; i++){
  for (let j=1; j<i+1; j++){
    starResult+='*'
  }
    starResult+='\n'
}
console.log(starResult);

//--------------------------------

let starResult2 = '';
for (let i=star; i>0; i--){
  for (let j=1; j<=i-1; j++){
    starResult2+=' '
  }
  for (let j=1; j<=2*(star-i)+1; j++){
    starResult2+='*'
  }
  starResult2+='\n'
}
console.log(starResult2)

//--------------------------------

let starResult3 = '';

for (let i = 0; i < star; i++) {
  if (i < Math.floor(star / 2)) {
    for (let j = 0; j < star - i; j++) {
      starResult3 += ' ';
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      starResult3 += '*';
    }
  } else {
    for (let j = 0; j < star - i; j++) {
      starResult3 += ' ';
    }
    for (let j = 0; j < i * 2 + 1 - star; j++) {
      starResult3 += '*';
    }
    for (let j = 0; j < star - (i * 2 + 1 - star); j++) {
      starResult3 += ' ';
    }
    for (let j = 0; j < i * 2 + 1 - star; j++) {
      starResult3 += '*';
    }
  }
  starResult3 += '\n';
}

console.log(starResult3);
